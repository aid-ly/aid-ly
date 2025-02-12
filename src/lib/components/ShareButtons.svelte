<script lang="ts">
	import { Linkedin, Facebook, XTwitter, Whatsapp, Telegram } from 'svelte-free-icons-brands';
	import { common, type Locale } from '../i18n';
	import { Envelope } from 'svelte-free-icons-solid';

	const { locale }: { locale: Locale['home']['share'] } = $props();
</script>

<div>
	<a
		href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(common.share('facebook', 'social', 'share_button'))}`}
		target="_blank"
		rel="noreferrer noopener"
		aria-label={locale.shareOn + 'Facebook'}
		title={locale.shareOn + 'Facebook'}
	>
		<Facebook color="#3b5998" size="15px" />
	</a>
	<a
		href={`https://x.com/intent/tweet?url=${encodeURIComponent(common.share('x', 'social', 'share_button'))}`}
		target="_blank"
		rel="noreferrer noopener"
		aria-label={locale.shareOn + 'X'}
		title={locale.shareOn + 'X'}
	>
		<XTwitter color="#000000" size="15px" />
	</a>
	<a
		href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(common.share('linkedin', 'social', 'share_button'))}`}
		target="_blank"
		rel="noreferrer noopener"
		aria-label={locale.shareOn + 'LinkedIn'}
		title={locale.shareOn + 'LinkedIn'}
	>
		<Linkedin color="#0e76a8" size="15px" />
	</a>
	<a
		href={`https://wa.me/?text=${encodeURIComponent(common.share('whatsapp', 'social', 'share_button'))}`}
		target="_blank"
		rel="noreferrer noopener"
		aria-label={locale.shareOn + 'WhatsApp'}
		title={locale.shareOn + 'WhatsApp'}
	>
		<Whatsapp color="#0dc143" size="15px" />
	</a>
	<a
		href={`mailto:?body=${encodeURIComponent(common.share('email', 'social', 'share_button'))}`}
		target="_blank"
		rel="noreferrer noopener"
		aria-label={locale.shareOn + 'Email'}
		title={locale.shareOn + 'Email'}
	>
		<Envelope color="#000000DF" size="15px" />
	</a>
	<a
		href={`https://t.me/share/url?url=${encodeURIComponent(common.share('telegram', 'social', 'share_button'))}`}
		target="_blank"
		rel="noreferrer noopener"
		aria-label={locale.shareOn + 'Telegram'}
		title={locale.shareOn + 'Telegram'}
	>
		<Telegram color="#33a8e3" size="15px" />
	</a>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
		height: 80px;
		gap: 10px;
		width: clamp(100px, 90vw, 350px);
		position: relative;
		box-shadow:
			-7px -7px 20px 0px #fff9,
			-4px -4px 5px 0px #fff9,
			7px 7px 20px 0px #0002,
			4px 4px 5px 0px #0001,
			inset 0px 0px 0px 0px #fff9,
			inset 0px 0px 0px 0px #0001,
			inset 0px 0px 0px 0px #fff9,
			inset 0px 0px 0px 0px #0001;
		transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
		border-radius: 10px;

		a {
			height: 35px;
			width: 35px;
			border-radius: 3px;
			background: #e0e5ec;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			-webkit-tap-highlight-color: transparent;
			box-shadow:
				-7px -7px 20px 0px #fff9,
				-4px -4px 5px 0px #fff9,
				7px 7px 20px 0px #0002,
				4px 4px 5px 0px #0001,
				inset 0px 0px 0px 0px #fff9,
				inset 0px 0px 0px 0px #0001,
				inset 0px 0px 0px 0px #fff9,
				inset 0px 0px 0px 0px #0001;
			transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
			font-size: 16px;
			color: rgba(42, 52, 84, 1);
			text-decoration: none;

			&:active {
				box-shadow:
					4px 4px 6px 0 rgba(255, 255, 255, 0.5),
					-4px -4px 6px 0 rgba(116, 125, 136, 0.2),
					inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
					inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
			}
		}
	}
</style>
