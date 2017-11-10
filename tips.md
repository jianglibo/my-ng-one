# @font-face 跨源请求失败。无 Access-Control-Allow-Origin 标头。

apache:

<FilesMatch "\.(ttf|ttc|otf|eot|woff|font.css)$">
  <IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "http://yoursite.com"
  </IfModule>
</FilesMatch>
 3、添加mine

AddType application/vnd.ms-fontobject .eot
AddType font/ttf .ttf
AddType font/otf .otf
AddType application/x-font-woff woff

# angular-cli version.
sudo npm install -g npm-check-updates

npm outdated
npm update


^ main version constrict

npm uninstall -g @angular/cli
npm cache clean
# if npm version is > 5 then use `npm cache verify` to avoid errors (or to avoid using --force)
npm install -g @angular/cli@1.4.8


rm -rf node_modules dist # use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell
npm install --save-dev @angular/cli@1.4.8
npm install


npm install @angular/cli@<version>