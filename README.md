# Userscript: Refined Aneo Progessi

UserScript that enhances the Progessi of Aneo.

[Install on Greasyfork](https://greasyfork.org/fr/scripts/469655-refined-aneo-progessi)

## Features

> **Note**
> It's pretty opinionated. I'd encourage you to fork and customize it to your own needs.

- Remove cards on the dashboard "Arrêts", "Nos talents", "Affaires gagnées", "Expensya", "Fiches Favorites", "Documents", "Taux de production" and "Documents institutionnels"
- Remove "solde CP" and "RTT" since they are not used
- Add a lint to Expensya on the header
- In "Ma feuille de temps", I remove duplicate UI elements and everything related to "hour" since it's not used
- Import a CSV to fill the "Ma feuille de temps" with the data.

### Import CSV

Before importing a CSV, you must add your lines in the "Ma feuille de temps" page.

Then, you will need to create a CSV file with the following format:

```csv
Date, ...Worked Days
Line Name,...Percentage of the day
...
```

> **Note**
> Line name can only be a subset of the line name you have in the "Ma feuille de temps" page.

## License

[MIT](./LICENSE) License © 2023 [Estéban Soubiran](https://github.com/barbapapazes)
