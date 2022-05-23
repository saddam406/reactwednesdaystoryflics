
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --force "
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
