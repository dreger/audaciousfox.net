Design, gaming, privacy, and tech. By K.Q. Dreger. 

All content copyright K.Q. Dreger in perpetuity. 

▲

---

Notes on getting set up: 

**Set up a crontab job to publish every 4 hours (useful for setting `publishDate` in the future)**

* `crontab -e`
* `0 */4 * * * /var/www/audaciousfox.net/autopublish.sh`