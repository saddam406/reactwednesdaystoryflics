
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh 'npm cache clean --force'
                sh 'rm -rf node_modules'
                sh 'yarn install' 
                sh 'yarn run build'
               

                
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/reactwednesdaystoryflics"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/reactwednesdaystoryflics/"
                sh "yarn run dev"
            }
        }
    }
}
