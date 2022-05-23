
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --force "
                sh "sudo npm i next-swc-linux-x64-gnu"
                sh "sudo npm run build"
               
              
                 
                 

                
            }
        }
        stage("Deploy") {
            steps {
                
                sh "sudo npm run dev"
            }
        }
    }
}
