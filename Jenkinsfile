
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --force "
                sh "sudo npm run build"
                sh "npm install next@canary"
                 
                 

                
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
