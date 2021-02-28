import 'reflect-metadata';
import { publish } from 'expressman';
import express = require('express');

publish(express(), {
  pattern:'src/routes/**.ts',
  swagger: {
    path: '/swagger',
    define: {
      title: 'Expressman Example',
      description: 'This is a demo app show casing expressman library'
    }
  },
  onUncaughtException(container, error) {
    console.log(error);
  }
}).then(({ app }) =>
  app.listen(8085, () => console.log('Expressman\'s example server started: http://localhost:8085'))
);
