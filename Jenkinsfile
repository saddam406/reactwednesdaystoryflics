pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "yarn install"
                sh "yarn run dev"
                
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

