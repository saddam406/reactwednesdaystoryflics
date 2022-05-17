pipeline {
     agent any
     withEnv(['PATH+NODE=/something=/path/to/node/bin']) {
        stage('Prepare') {
        sh "npm install -g yarn"
        sh "yarn install"
    }
}
                
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

