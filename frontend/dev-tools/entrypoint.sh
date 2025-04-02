#!/bin/sh

rsync -a /cache/node_modules/. /app/node_modules/
exec npm run dev
