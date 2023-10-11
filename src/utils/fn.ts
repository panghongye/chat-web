import { observer } from 'mobx-react';
import { JSX } from 'react/jsx-runtime';
export function onTouchStart(e: any) {
	// fix touch to scroll background page on iOS
	if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
		return;
	}
	const pNode = closest(e.target, '.am-modal-content');
	if (!pNode) {
		e.preventDefault();
	}
}

export function closest(el: any, selector: any) {
	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		}
		el = el.parentElement;
	}
	return null;
}

export function router_observer(component: { (props: any): JSX.Element; (props: { [x: string]: any; lists: any[]; title?: any; clickType: "getUserInfo" | "getGroupInfo" | "chat"; }): JSX.Element; }) {
	return (observer(component));
}





export function scrollToBottom() {
	try {
		global['chat-msgs-div'].scrollTop = Number.MAX_SAFE_INTEGER

	} catch (error) {
		console.error("scrollToBottom() err")
	}
}



