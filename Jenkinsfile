
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --force "
                sh "rm -rf node_modules"
                sh "npm i -g npm@latest"
                
                sh "sudo npm run build"
                 
                 

                
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/reactwednesdaystoryflics"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/reactwednesdaystoryflics/"
                sh "sudo npm run dev"
            }
        }
    }
}
