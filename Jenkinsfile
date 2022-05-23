
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm i -g npm@latest"
                
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
