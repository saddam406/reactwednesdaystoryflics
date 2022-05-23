
pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install --force "
           
              
                 
                 

                
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
