#starting point:linux alpine with node installed
FROM node:alpine 
#simple app: container only needs one file
COPY script.js /home 
#run the script, so we can see the output
CMD node /home/script.js 