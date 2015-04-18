<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'msmu');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')stuhq;GWa8qIFo0|uTOy0_L?Q*rV[>ALw-VehV9!?Zfd--+yKNkC:_-Fod?`De9');
define('SECURE_AUTH_KEY',  'YZjs(+ZV9P<$/+:;zd(:+2LSoon/lO6@.90OVC;-{_/}:fEi*q+N=VFQlGJZw;4X');
define('LOGGED_IN_KEY',    ' |F-T}@v|(U09WH]5HAl^41UBMG0<jbQlo&N0.W>K-d>EZpzw^$-I+3MsvMan#@%');
define('NONCE_KEY',        '[8Q<wN}A-y05XW`z{A9PN^[qiemp&|k fUtZku@3%H7}q$@#~imn?HOxj]#U3Ky|');
define('AUTH_SALT',        '|C-.cdEY+R91J;#u/T%wYZKF_z[Ehp1&h#p|W3H],FxLo]zCnVN8c0z.EB?4?z?k');
define('SECURE_AUTH_SALT', '^fOJxyeBPd[V8@YzH-Lddor]0q$UlJe|z%w#s@X^-+t]AwRX/LH1`ADZ.h`JKIoy');
define('LOGGED_IN_SALT',   'KgenFgv2P0:>:t ipx?N|HwQa-lE~57lZe%SAvn_yWh`+7/!H;HR&Q;H0A^Y$//=');
define('NONCE_SALT',       'j-MoR~qlXllUC|MHN|3M;?EzZWL=Uc< ;gf0sd8Jt~29!QNgup@_jDJ&&S|-EbOz');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'msmu_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
