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
             
             bat "npm install --force"
             bat "npm install swr"
        }
      }
    }
    stage('Test') {
      steps {
        bat "the test is successful"

      }
    }
    stage('deploy') {
      steps {
        bat "npm run dev"
      }
    }
  }
  post {
    always {
      junit(testResults: 'target/surefire-reports/*.xml', allowEmptyResults : true)
    }
  }
}
    
     

