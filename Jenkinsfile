pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'pip install selenium'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                echo 'Running Selenium tests...'
                bat 'python test_feedback.py'
            }
        }

        stage('Post Build') {
            steps {
                echo 'Pipeline executed successfully!'
            }
        }
    }

    post {
        success {
            echo 'All tests passed '
        }
        failure {
            echo 'Some tests failed '
        }
    }
}