9/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN"], // Add "ERROR" "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
//		{
//			module: "alert",
//		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-FlipClock",
			position: "middle_center"
		},
		{
			module: "calendar",
			header: "FAMILY EVENTS",
			position: "top_right",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/quemazote%40gmail.com/private-08e76ceedcfc5c78cf4ca645ce544253/basic.ics"
					}
				]
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "middle_center"
		// },
		{
			module: "MMM-OpenWeatherMapForecast",
			position: "top_left",
			header: "Weather",
			classes: "default everyone",
			disabled: false,
			config: {
			  apikey: "edeafcc6ed95e8eebcfef13895db3cfc", //only string here
			  latitude: "40.267510",            //string
			  longitude: "-111.700790",          // string
			  units: "imperial",
			  iconset: "4c",
			  mainIconset: "4c",
			  colored: true,
			  concise: false,
			  showFeelsLikeTemp: false,
			  showCurrentConditions: true,
			  showSummary: true,
			  forecastLayout: "tiled",
			  useAnimatedIcons: true,
			}
    	},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "tech",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
