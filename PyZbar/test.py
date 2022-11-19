from pyzbar.pyzbar import decode

# Importing Image module from PIL package 
from PIL import Image 
  
# creating a image object (main image) 
#im1 = Image.open(r"C:\Users\System-Pc\Desktop\flower1.jpg") 
  
# save a image using extension
#im1 = im1.save("geeks.jpg")

im1 = Image.open("barcode.jpg")

print(decode(im1))
