#!/usr/bin/env python3
"""
Simple script to create basic PNG icons for the Chrome extension
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    PIL_AVAILABLE = True
except ImportError:
    PIL_AVAILABLE = False
    print("PIL not available, creating simple placeholder icons")

import os

def create_simple_icon(size, filename):
    """Create a simple icon with the letter G"""
    if PIL_AVAILABLE:
        # Create image with PIL
        img = Image.new('RGBA', (size, size), (66, 133, 244, 255))  # Google Blue
        draw = ImageDraw.Draw(img)
        
        # Draw circle background
        margin = size // 8
        draw.ellipse([margin, margin, size-margin, size-margin], 
                    fill=(52, 168, 83, 255), outline=(255, 255, 255, 255), width=2)
        
        # Draw letter G
        try:
            font_size = size // 2
            font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", font_size)
        except:
            font = ImageFont.load_default()
        
        text = "G"
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = (size - text_width) // 2
        y = (size - text_height) // 2 - size // 16
        
        draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)
        
        img.save(filename, 'PNG')
        print(f"Created {filename} ({size}x{size})")
    else:
        # Create a simple placeholder file
        with open(filename, 'wb') as f:
            # Write a minimal PNG header (1x1 transparent pixel)
            f.write(b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xdb\x00\x00\x00\x00IEND\xaeB`\x82')
        print(f"Created placeholder {filename} ({size}x{size})")

def main():
    # Create icons directory if it doesn't exist
    os.makedirs('icons', exist_ok=True)
    
    # Create different sizes
    sizes = [16, 32, 48, 128]
    for size in sizes:
        filename = f'icons/icon{size}.png'
        create_simple_icon(size, filename)

if __name__ == '__main__':
    main()
