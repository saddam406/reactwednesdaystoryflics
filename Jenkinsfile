pipeline {
	agent any 
	stages {	
		stage('run front') {
			steps {
				echo 'exicuting yarn...'
				nodejs('Node-16.15.0'){
					sh 'yarn install'
                         sh 'yarn run build'
                         sh 'yarn run dev'
				}
			}
		}

		stage('run backend') {
			steps {
				echo 'executing gradle...'
				withGradle(){
					sh './gradlew -v'


				}
			}
		}
	}
}
