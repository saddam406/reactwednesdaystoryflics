pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm config set legacy-peer-deps true"
                sh "sudo npm run dev"
                
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app/story-flics"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/story-flics"
            }
        }
    }
}
