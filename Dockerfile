# Use Nginx image as the base image
FROM nginx:latest

# Copy the website files into the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Define the command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
