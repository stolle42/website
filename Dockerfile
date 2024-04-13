#1: starting point:linux alpine with nginx installed
FROM nginx:alpine 
#2: copy our website to the place nginx expects it
COPY index.html /usr/share/nginx/html/
#3: expose Port 80
EXPOSE 80
