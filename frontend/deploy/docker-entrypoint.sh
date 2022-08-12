#!/bin/sh
envsubst '' < /etc/nginx/conf.d/default.conf.template \
| tee /etc/nginx/conf.d/default.conf > /dev/null

exec "$@"