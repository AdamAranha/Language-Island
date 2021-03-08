//Inside the config.json, be sure that 'production' contains process.env.JAWSDB_URL
{
    "development": {
        "username": "root",
            "password": "1Ardiadcm",
                "database": "users",
                    "host": "localhost",
                        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
            "dialect": "mysql"
    }
}