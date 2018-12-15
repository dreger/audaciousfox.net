Design, gaming, privacy, and tech. By K.Q. Dreger. 

All content copyright K.Q. Dreger in perpetuity. 

▲

---

**Autopublisher**

* Set up a crontab job to publish every 4 hours 
	* `crontab -e`
	* `0 */4 * * * /var/www/audaciousfox.net/autopublish.sh`
* Use the `publishDate` front matter to publish posts in the future