import server from 'castle-server'
import { env } from 'process'
import { install as RouterInstall } from 'castle-router'
import { install as SessionInstall } from 'castle-session'
import * as chokidar from 'chokidar'
import { resolve } from 'path';
server.install({ install: SessionInstall })
server.install({ install: RouterInstall })
chokidar.watch('dist/**/*.js').on('all', (event, file) => {
    if (require.cache[resolve(file)]) {
        delete require.cache[resolve(file)]
    }
});
server.start(Number(env.LISTEN_PORT || 3000))