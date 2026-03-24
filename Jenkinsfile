pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat '"C:\\Users\\Prathmesh\\AppData\\Local\\Programs\\Python\\Python310\\python.exe" -m pip install selenium'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                bat '"C:\\Users\\Prathmesh\\AppData\\Local\\Programs\\Python\\Python310\\python.exe" test_feedback.py'
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
            echo 'Some tests failed '
        }
    }
}