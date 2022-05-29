module.exports = {
  apps : [
    {
      // General
      /** ***(string)***"my-api"***application name (default to script filename without extension) */
      name: 'hello a',

      /** ***(string)***"/usr/bin/python"***interpreter absolute path (default to node) */
      interpreter: '/Users/rodolfo/.volta/bin/node',
      /** ***(string)***"–harmony"***option to pass to the interpreter */
      interpreter_args: '',
      /** ***(string)***"–harmony"***alias to interpreter_args */
      node_args: '',

      /** ***(string)***"/var/www/"***the directory from which your app will be launched */
      cwd: './packages/hello_a',
      /** ***(string)***"./api/app.js"***script path relative to pm2 start. if `cwd` is set, the path is relative to it */
      script: './index.js',
      /** ***(string)***"-a 13 -b 12"***string containing all arguments passed via CLI to script */
      args: '',

      // Advanced features
      /** ***(number)***-1***number of app instance to be launched */
      instances: 1,
      /** ***(string)***"cluster"***mode to start your app, can be "cluster" or "fork", default fork */
      exec_mode: 'fork',
      /** ***(boolean or [])***true***enable watch & restart feature, if a file change in the folder or subfolder, your app will get reloaded */
      watch: true,
      /** ***list***["[\/\\]\./", "node_modules"]***list of regex to ignore some file or folder names by the watch feature */
      ignore_watch: ['node_modules'],
      /** ***string***"150M"***your app will be restarted if it exceeds the amount of memory specified. human-friendly format : it can be "10M", "100K", "2G" and so on… */
      max_memory_restart: '50M',
      /** ***object***{"NODE_ENV": "development", "ID": "42"}***env variables which will appear in your app */
      env: { NODE_ENV: 'development' },
      /** ***object***{"NODE_ENV": "production", "ID": "89"}***inject when doing pm2 restart app.yml --env */
      env_production: { NODE_ENV: 'production' },
      /** ***boolean***true***default to true, [enable/disable source map file] */
      source_map_support: true,
      /** ***string***"NODE_APP_INSTANCE"***[see documentation](https://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables) */
      // instance_var: '',
      /** ***array of string***[ "REACT_" ]***Excludes global variables starting with "REACT_" and will not allow their penetration into the cluster. */
      filter_env: [''],

      // Log files
      /** ***(string)***"YYYY-MM-DD HH:mm Z"***log date format (see log section) */
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS Z',
      /** ***(string)***""***error file path (default to $HOME/.pm2/logs/err.log) */
      error_file: '../../logs/pm2/hello_a/error.log',
      /** ***(string)***""***output file path (default to $HOME/.pm2/logs/out.log) */
      out_file: '../../logs/pm2/hello_a/output.log',
      /** ***boolean***true***if set to true, avoid suffixing logs file with the process id */
      combine_logs: true,
      /** ***boolean***true***alias to combine_logs */
      merge_logs: true,
      /** ***(string)***""***pid file path (default to $HOME/.pm2/pid/app-pm_id.pid) */
      pid_file: '../../logs/pm2/hello_a.pid',

      // Control flow
      /** ***(string)***""***min uptime of the app to be considered started */
      min_uptime: '100',
      /** ***number***8000***time in ms before forcing a reload if app not listening */
      listen_timeout: 10000,
      /** ***number***1600***time in milliseconds before sending [a final SIGKILL](https://pm2.keymetrics.io/docs/usage/signals-clean-restart/#cleaning-states-and-jobs) */
      kill_timeout: 1000,
      /** ***boolean***false***shutdown an application with process.send(‘shutdown’) instead of process.kill(pid, SIGINT) */
      shutdown_with_message: false,
      /** ***boolean***false***Instead of reload waiting for listen event, wait for process.send(‘ready’) */
      wait_ready: false,
      /** ***number***10***number of consecutive unstable restarts (less than 1sec interval or custom time via min_uptime) before your app is considered errored and stop being restarted */
      max_restarts: 5,
      /** ***number***4000***time to wait before restarting a crashed app (in milliseconds). defaults to 0. */
      restart_delay: 500,
      /** ***boolean***false***true by default. if false, PM2 will not restart your app if it crashes or ends peacefully */
      autorestart: false,
      /** ***string***"1 0 * * *"***a cron pattern to restart your app. Application must be running for cron feature to work */
      cron_restart: '1 0 * * *',
      /** ***boolean***false***true by default. if false, PM2 will start without vizion features (versioning control metadatas) */
      vizion: true,
      /** ***list***["npm install", "echo launching the app"]***a list of commands which will be executed after you perform a Pull/Upgrade operation from Keymetrics dashboard */
      post_update: [''],
      /** ***boolean***true***defaults to false. if true, you can start the same script several times which is usually not allowed by PM2 */
      force: false,

      // // Deployment
      // /** ***String***$HOME/.ssh***SSH key path */
      // key: '',
      // /** ***String***""***SSH user */
      // user: '',
      // /** ***[String]***""***SSH host */
      // host: '',
      // /** ***String or [String]***""***SSH options with no command-line flag, see ‘man ssh’ */
      // ssh_options: '',
      // /** ***String***""***GIT remote/branch */
      // ref: '',
      // /** ***String***""***GIT remote */
      // repo: '',
      // /** ***String***""***path in the server */
      // path: '',
      // /** ***String***""***Pre-setup command or path to a script on your local machine */
      // 'pre-setup': '',
      // /** ***String***""***Post-setup commands or path to a script on the host machine */
      // 'post-setup': '',
      // /** ***String***""***pre-deploy action */
      // 'pre-deploy-local': '',
      // /** ***String***""***post-deploy action */
      // 'post-deploy': '',
    },
    {
      // General
      /** ***(string)***"my-api"***application name (default to script filename without extension) */
      name: 'hello b',

      /** ***(string)***"/usr/bin/python"***interpreter absolute path (default to node) */
      interpreter: '/Users/rodolfo/.volta/bin/node',
      /** ***(string)***"–harmony"***option to pass to the interpreter */
      interpreter_args: '',
      /** ***(string)***"–harmony"***alias to interpreter_args */
      node_args: '',

      /** ***(string)***"/var/www/"***the directory from which your app will be launched */
      cwd: './packages/hello_b',
      /** ***(string)***"./api/app.js"***script path relative to pm2 start. if `cwd` is set, the path is relative to it */
      script: './index.js',
      /** ***(string)***"-a 13 -b 12"***string containing all arguments passed via CLI to script */
      args: '',

      // Advanced features
      /** ***(number)***-1***number of app instance to be launched */
      instances: 1,
      /** ***(string)***"cluster"***mode to start your app, can be "cluster" or "fork", default fork */
      exec_mode: 'fork',
      /** ***(boolean or [])***true***enable watch & restart feature, if a file change in the folder or subfolder, your app will get reloaded */
      watch: true,
      /** ***list***["[\/\\]\./", "node_modules"]***list of regex to ignore some file or folder names by the watch feature */
      ignore_watch: ['node_modules'],
      /** ***string***"150M"***your app will be restarted if it exceeds the amount of memory specified. human-friendly format : it can be "10M", "100K", "2G" and so on… */
      max_memory_restart: '50M',
      /** ***object***{"NODE_ENV": "development", "ID": "42"}***env variables which will appear in your app */
      env: { NODE_ENV: 'development' },
      /** ***object***{"NODE_ENV": "production", "ID": "89"}***inject when doing pm2 restart app.yml --env */
      env_production: { NODE_ENV: 'production' },
      /** ***boolean***true***default to true, [enable/disable source map file] */
      source_map_support: true,
      /** ***string***"NODE_APP_INSTANCE"***[see documentation](https://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables) */
      // instance_var: '',
      /** ***array of string***[ "REACT_" ]***Excludes global variables starting with "REACT_" and will not allow their penetration into the cluster. */
      filter_env: [''],

      // Log files
      /** ***(string)***"YYYY-MM-DD HH:mm Z"***log date format (see log section) */
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS Z',
      /** ***(string)***""***error file path (default to $HOME/.pm2/logs/XXXerr.log) */
      error_file: '../../logs/pm2/hello_b/error.log',
      /** ***(string)***""***output file path (default to $HOME/.pm2/logs/XXXout.log) */
      out_file: '../../logs/pm2/hello_b/output.log',
      /** ***boolean***true***if set to true, avoid suffixing logs file with the process id */
      combine_logs: true,
      /** ***boolean***true***alias to combine_logs */
      merge_logs: true,
      /** ***(string)***""***pid file path (default to $HOME/.pm2/pid/app-pm_id.pid) */
      pid_file: '../../logs/pm2/hello_b.pid',

      // Control flow
      /** ***(string)***""***min uptime of the app to be considered started */
      min_uptime: '100',
      /** ***number***8000***time in ms before forcing a reload if app not listening */
      listen_timeout: 10000,
      /** ***number***1600***time in milliseconds before sending [a final SIGKILL](https://pm2.keymetrics.io/docs/usage/signals-clean-restart/#cleaning-states-and-jobs) */
      kill_timeout: 1000,
      /** ***boolean***false***shutdown an application with process.send(‘shutdown’) instead of process.kill(pid, SIGINT) */
      shutdown_with_message: false,
      /** ***boolean***false***Instead of reload waiting for listen event, wait for process.send(‘ready’) */
      wait_ready: false,
      /** ***number***10***number of consecutive unstable restarts (less than 1sec interval or custom time via min_uptime) before your app is considered errored and stop being restarted */
      max_restarts: 5,
      /** ***number***4000***time to wait before restarting a crashed app (in milliseconds). defaults to 0. */
      restart_delay: 500,
      /** ***boolean***false***true by default. if false, PM2 will not restart your app if it crashes or ends peacefully */
      autorestart: false,
      /** ***string***"1 0 * * *"***a cron pattern to restart your app. Application must be running for cron feature to work */
      cron_restart: '1 0 * * *',
      /** ***boolean***false***true by default. if false, PM2 will start without vizion features (versioning control metadatas) */
      vizion: true,
      /** ***list***["npm install", "echo launching the app"]***a list of commands which will be executed after you perform a Pull/Upgrade operation from Keymetrics dashboard */
      post_update: [''],
      /** ***boolean***true***defaults to false. if true, you can start the same script several times which is usually not allowed by PM2 */
      force: false,

      // // Deployment
      // /** ***String***$HOME/.ssh***SSH key path */
      // key: '',
      // /** ***String***""***SSH user */
      // user: '',
      // /** ***[String]***""***SSH host */
      // host: '',
      // /** ***String or [String]***""***SSH options with no command-line flag, see ‘man ssh’ */
      // ssh_options: '',
      // /** ***String***""***GIT remote/branch */
      // ref: '',
      // /** ***String***""***GIT remote */
      // repo: '',
      // /** ***String***""***path in the server */
      // path: '',
      // /** ***String***""***Pre-setup command or path to a script on your local machine */
      // 'pre-setup': '',
      // /** ***String***""***Post-setup commands or path to a script on the host machine */
      // 'post-setup': '',
      // /** ***String***""***pre-deploy action */
      // 'pre-deploy-local': '',
      // /** ***String***""***post-deploy action */
      // 'post-deploy': '',
    },
  ],
}
