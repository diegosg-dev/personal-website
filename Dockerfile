FROM caddy:2-alpine

COPY Caddyfile.container /etc/caddy/Caddyfile
COPY site/ /srv/

EXPOSE 8080
