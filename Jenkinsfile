pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
                sh "sudo npm run dev"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/reactwednesdaystoryflics"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/reactwednesdaystoryflics/"
            }
        }
    }
}
