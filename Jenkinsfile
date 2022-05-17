pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                echo "index.js"
           }
        }
        stage("Deploy") {
            steps {
                sh "npm install -g"
                sh "npm run dev"
                sh "rm -rf /var/www/jenkins-react-app"
                sh "cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}
