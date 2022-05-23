
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --save --legacy-peer-deps"
                
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
