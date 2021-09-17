module.exports = {
  apps : [{
    script: 'dist/reiki/server/main.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '152.228.173.68',
      ref  : 'origin/main',
      repo : 'https://github.com/marcsim/reiki.git',
      path : '/var/www/reiki',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
