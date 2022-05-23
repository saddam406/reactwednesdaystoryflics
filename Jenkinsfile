
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --force "
                sh "sudo npm run build"
                sh "npm i next-swc-linux-x64-gnu"
           
              
                 
                 

                
            }
        }
        stage("Deploy") {
            steps {
                
                sh "sudo npm run dev"
            }
        }
    }
}
