pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm cache clean --force"
                sh "rm -rf node_modules"
                sh "npm install --force"
                sh "npm install swr"
     
            }
        }
        post {
           always {
             junit '**/reports/junit/*.xml'
        
            }
        }
        stage("Deploy") {
            steps {
                  sh "npm run dev"
            }
        } 
    
     }
}
