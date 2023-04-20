FROM debian:latest

#INITIAL INSTALLS
RUN apt update && apt upgrade -y
RUN apt install -y \
    apt-transport-https \
    lsb-release \
    wget \
    curl \
    gnupg \
    gnupg1 \
    gnupg2 \
    nano \
    software-properties-common \
    --no-install-recommends

# INSTALL CHROME
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get update
RUN apt install google-chrome-stable -y

# INSTALL NODEJS AND NPM
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt update -y
RUN apt install nodejs -y
RUN mkdir /apiplaca
WORKDIR "/apiplaca"
COPY ./ ./
RUN npm install -g npm@9.2.0
# RUN npm npm i npm@latest
RUN npm install
RUN apt update
RUN apt full-upgrade -y
EXPOSE 8080
CMD node server.js