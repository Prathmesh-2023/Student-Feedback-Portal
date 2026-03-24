pipeline {
    agent any

    environment {
        PYTHON = 'python'
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }

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
            echo 'All tests passed successfully!'
        }
        failure {
            echo 'Some tests failed'
        }
    }
}