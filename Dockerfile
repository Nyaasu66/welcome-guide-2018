FROM node:6.11.0

#在容器中创建一个目录
RUN mkdir -p /home/web

#将容器的工作目录定位到 /home/Service中
WORKDIR /home/web

#把本机当前目录下的所有文件拷贝到Image的/home/Service文件夹下
COPY . /home/web  

# Install app dependencies
RUN npm install

EXPOSE  1217

CMD npm install && npm start