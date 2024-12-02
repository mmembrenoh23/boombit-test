<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'boombit_test_db' );

/** Database username */
define( 'DB_USER', 'boombit_test_user' );

/** Database password */
define( 'DB_PASSWORD', 'RiL7h1VEtA' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')cS<WKymjxU,g)8tJ@vZ9D[P|bZ[eb?[F:~zcsMQiWo>j!V99=8+V2Ewdj1gWVq|' );
define( 'SECURE_AUTH_KEY',  'tb7zI_[Q]jxO36)VX`!IT7Y!oM<z3=[^t;.1No-:6{q^(7xPu`B!OIb[vukVt#0u' );
define( 'LOGGED_IN_KEY',    '&hnuW$5o}vH9%di~>n(WvSS!:t801L2Y >_|:z&vIX{kM)7NENERfPU<5/k{w(L+' );
define( 'NONCE_KEY',        '{2R4dW9)umvVF8=.}*CEM94MPk7R`Ik>2v!%=<SR5VE`Jh_yY)oc~Dcu/(Htur<J' );
define( 'AUTH_SALT',        'I,!r(B8JR5},_d^NB:?&G<Ej*0!:{nea{]g]7N#wIfFw5g$KSb,H/_fN`|_S7WzO' );
define( 'SECURE_AUTH_SALT', ',2iJq|nE`CP/x7}9ZfohyohBtm^UDd1d_]J;_E](Pf8Uh|Cf/ov0=GJT$jYrm#XO' );
define( 'LOGGED_IN_SALT',   'd9zde%oe=ev1*9Z3=e cU?9EJ.}AzQ(VdPG^,&FgTMDt;F<:o*WGJY5FnJUnK|(`' );
define( 'NONCE_SALT',       'W4E(?6KApW;Vp=dI $X``KDvBKP 3&/Px|Q?L{sawrgWNpc+t6ePvnrx]]p]!haS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
