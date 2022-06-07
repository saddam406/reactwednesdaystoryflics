pipeline {
  // This pipeline requires the following plugins:
  // * Git: https://plugins.jenkins.io/git/
  // * Workflow Aggregator: https://plugins.jenkins.io/workflow-aggregator/
  // * JUnit: https://plugins.jenkins.io/junit/
  agent 'any'
  stages {
    stage('build') {
      steps {
        script {
             
             sh "npm install --force"
             sh "npm install swr"
        }
      }
    }
    stage('Test') {
      steps {
        sh "the test is successful"

      }
    }
    stage('deploy') {
      steps {
        sh "npm run dev"
      }
    }
  }
  post {
    always {
      junit(testResults: 'target/surefire-reports/*.xml', allowEmptyResults : true)
    }
  }
}
    
     

