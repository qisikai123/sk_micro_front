#!/bin/bash

function buildUpstream(){
    cat > /etc/nginx/conf.d/default.conf <<EOF
server {

    listen       80; # 1.15.x版本后这样写
    server_name  localhost; # 填写绑定证书的域名
    charset utf-8;
    add_header X-Frame-Options SAMEORIGIN;

    location ${NGINX_BSS_CONSOLE_PATH} {
        proxy_pass http://${BSS_CONSOLE_IP};
        proxy_set_header  X-Real-IP  \$remote_addr;
        proxy_set_header Host \$host;
        proxy_redirect off;
        proxy_set_header HTTP_AUTHORIZATION \$http_authorization;
        client_max_body_size  4096m;
        proxy_set_header Referer \$http_referer;
        proxy_set_header Cookie \$http_cookie;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }

    location ${NGINX_BSS_AUTH_SERVER_PATH} {
        proxy_pass http://${BSS_AUTH_SERVER_IP};
        proxy_set_header  X-Real-IP  \$remote_addr;
        proxy_set_header Host \$host;
        proxy_redirect off;
        proxy_set_header HTTP_AUTHORIZATION \$http_authorization;
        client_max_body_size  4096m;
        proxy_set_header Referer \$http_referer;
        proxy_set_header Cookie \$http_cookie;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;

    }
    location ${NGINX_WS_PATH}{
       proxy_http_version 1.1;
       proxy_pass http://${BSS_WS_IP};
       proxy_redirect off;
       proxy_set_header Host \$host;
       proxy_set_header X-Real-IP \$remote_addr;
       proxy_read_timeout 3600s;
       proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
       proxy_set_header Upgrade \$http_upgrade;
       proxy_set_header Connection \$connection_upgrade;
    }

    location / {
        root /usr/share/nginx/html;
        index index.html;
    }

    # 禁用HLS的location
    location ~* \.m3u8$ {
        return 403;
    }

    location ~* \.ts$ {
        return 403;
    }

    # 禁用MP4的location
    location ~* \.(mp4)$ {
        return 403;
    }

    error_page  404 500 502 503 504 /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
EOF
}

function startNginx(){
    nginx -g "daemon off;"
}

function reloadNginx(){
    nginx -s "reload;"
}

buildUpstream;
startNginx;
reloadNginx;
