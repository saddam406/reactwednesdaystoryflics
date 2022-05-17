pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install -g yarn"
                sh "sudo yarn install"
                sh "sudo yarn run build"
                sh "sudo yarn run dev"
                
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
