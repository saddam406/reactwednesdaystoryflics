pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo yarn install"
                sh "sudo yarn run build"
                sh "sudo yarn run dev"
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
