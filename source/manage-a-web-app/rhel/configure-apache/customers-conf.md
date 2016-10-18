```ruby
# ~/learn-chef/cookbooks/awesome_customers_rhel/templates/customers.conf.erb
<VirtualHost *:80>
  ServerName <%= node['hostname'] %>
  ServerAdmin 'ops@example.com'

  DocumentRoot <%= node['awesome_customers_rhel']['document_root'] %>
  <Directory "/">
          Options FollowSymLinks
          AllowOverride None
  </Directory>
  <Directory <%= node['awesome_customers_rhel']['document_root'] %> >
          Options Indexes FollowSymLinks MultiViews
          AllowOverride None
          Require all granted
  </Directory>

  ErrorLog /var/log/httpd/error.log

  LogLevel warn

  CustomLog /var/log/httpd/access.log combined
  ServerSignature Off

  AddType application/x-httpd-php .php
  AddType application/x-httpd-php-source .phps
  DirectoryIndex index.php index.html
</VirtualHost>
```