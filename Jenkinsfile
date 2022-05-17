pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                echo "dev"
           }
        }
        stage("Deploy") {
            steps {
                sh "npm run dev"
                sh "rm -rf /var/www/jenkins-react-app"
                sh "cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}
