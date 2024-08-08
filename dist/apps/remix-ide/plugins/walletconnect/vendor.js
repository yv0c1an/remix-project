      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${(0,if_defined.o)(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${(0,if_defined.o)(networkImage)}
        avatarSrc=${(0,if_defined.o)(this.profileImage)}
        balance=${showBalance?esm.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){if(this.isUnsupportedChain){esm.IN.open({view:"UnsupportedChain"})}else{esm.IN.open()}}};__decorate([(0,decorators.Cb)({type:Boolean})],W3mAccountButton.prototype,"disabled",void 0);__decorate([(0,decorators.Cb)()],W3mAccountButton.prototype,"balance",void 0);__decorate([(0,decorators.Cb)()],W3mAccountButton.prototype,"charsStart",void 0);__decorate([(0,decorators.Cb)()],W3mAccountButton.prototype,"charsEnd",void 0);__decorate([(0,decorators.SB)()],W3mAccountButton.prototype,"address",void 0);__decorate([(0,decorators.SB)()],W3mAccountButton.prototype,"balanceVal",void 0);__decorate([(0,decorators.SB)()],W3mAccountButton.prototype,"balanceSymbol",void 0);__decorate([(0,decorators.SB)()],W3mAccountButton.prototype,"profileName",void 0);__decorate([(0,decorators.SB)()],W3mAccountButton.prototype,"profileImage",void 0);__decorate([(0,decorators.SB)()],W3mAccountButton.prototype,"network",void 0);__decorate([(0,decorators.SB)()],W3mAccountButton.prototype,"isUnsupportedChain",void 0);W3mAccountButton=__decorate([(0,dist_esm.customElement)("w3m-account-button")],W3mAccountButton);const styles=lit.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var w3m_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mButton=class W3mButton extends lit.oi{constructor(){super();this.unsubscribe=[];this.disabled=false;this.balance=undefined;this.size=undefined;this.label=undefined;this.loadingLabel=undefined;this.charsStart=4;this.charsEnd=6;this.isAccount=esm.Ni.state.isConnected;this.unsubscribe.push(esm.Ni.subscribeKey("isConnected",(val=>{this.isAccount=val})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return this.isAccount?lit.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,if_defined.o)(this.balance)}
            .charsStart=${(0,if_defined.o)(this.charsStart)}
            .charsEnd=${(0,if_defined.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:lit.dy`
          <w3m-connect-button
            size=${(0,if_defined.o)(this.size)}
            label=${(0,if_defined.o)(this.label)}
            loadingLabel=${(0,if_defined.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};W3mButton.styles=styles;w3m_button_decorate([(0,decorators.Cb)({type:Boolean})],W3mButton.prototype,"disabled",void 0);w3m_button_decorate([(0,decorators.Cb)()],W3mButton.prototype,"balance",void 0);w3m_button_decorate([(0,decorators.Cb)()],W3mButton.prototype,"size",void 0);w3m_button_decorate([(0,decorators.Cb)()],W3mButton.prototype,"label",void 0);w3m_button_decorate([(0,decorators.Cb)()],W3mButton.prototype,"loadingLabel",void 0);w3m_button_decorate([(0,decorators.Cb)()],W3mButton.prototype,"charsStart",void 0);w3m_button_decorate([(0,decorators.Cb)()],W3mButton.prototype,"charsEnd",void 0);w3m_button_decorate([(0,decorators.SB)()],W3mButton.prototype,"isAccount",void 0);W3mButton=w3m_button_decorate([(0,dist_esm.customElement)("w3m-button")],W3mButton);var w3m_connect_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectButton=class W3mConnectButton extends lit.oi{constructor(){super();this.unsubscribe=[];this.size="md";this.label="Connect Wallet";this.loadingLabel="Connecting...";this.open=esm.IN.state.open;this.loading=esm.IN.state.loading;this.unsubscribe.push(esm.IN.subscribe((val=>{this.open=val.open;this.loading=val.loading})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const isLoading=this.loading||this.open;return lit.dy`
      <wui-connect-button
        size=${(0,if_defined.o)(this.size)}
        .loading=${isLoading}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${isLoading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){if(this.open){esm.IN.close()}else if(!this.loading){esm.IN.open()}}};w3m_connect_button_decorate([(0,decorators.Cb)()],W3mConnectButton.prototype,"size",void 0);w3m_connect_button_decorate([(0,decorators.Cb)()],W3mConnectButton.prototype,"label",void 0);w3m_connect_button_decorate([(0,decorators.Cb)()],W3mConnectButton.prototype,"loadingLabel",void 0);w3m_connect_button_decorate([(0,decorators.SB)()],W3mConnectButton.prototype,"open",void 0);w3m_connect_button_decorate([(0,decorators.SB)()],W3mConnectButton.prototype,"loading",void 0);W3mConnectButton=w3m_connect_button_decorate([(0,dist_esm.customElement)("w3m-connect-button")],W3mConnectButton);var w3m_modal=__webpack_require__(58014);const w3m_network_button_styles=lit.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var w3m_network_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mNetworkButton=class W3mNetworkButton extends lit.oi{constructor(){super();this.unsubscribe=[];this.disabled=false;this.network=esm.fB.state.caipNetwork;this.connected=esm.Ni.state.isConnected;this.loading=esm.IN.state.loading;this.isUnsupportedChain=esm.fB.state.isUnsupportedChain;this.unsubscribe.push(...[esm.fB.subscribeKey("caipNetwork",(val=>this.network=val)),esm.Ni.subscribeKey("isConnected",(val=>this.connected=val)),esm.IN.subscribeKey("loading",(val=>this.loading=val)),esm.fB.subscribeKey("isUnsupportedChain",(val=>this.isUnsupportedChain=val))])}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return lit.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${(0,if_defined.o)(esm.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){if(!this.loading){esm.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"});esm.IN.open({view:"Networks"})}}};W3mNetworkButton.styles=w3m_network_button_styles;w3m_network_button_decorate([(0,decorators.Cb)({type:Boolean})],W3mNetworkButton.prototype,"disabled",void 0);w3m_network_button_decorate([(0,decorators.SB)()],W3mNetworkButton.prototype,"network",void 0);w3m_network_button_decorate([(0,decorators.SB)()],W3mNetworkButton.prototype,"connected",void 0);w3m_network_button_decorate([(0,decorators.SB)()],W3mNetworkButton.prototype,"loading",void 0);w3m_network_button_decorate([(0,decorators.SB)()],W3mNetworkButton.prototype,"isUnsupportedChain",void 0);W3mNetworkButton=w3m_network_button_decorate([(0,dist_esm.customElement)("w3m-network-button")],W3mNetworkButton);const w3m_router_styles=lit.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var w3m_router_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mRouter=class W3mRouter extends lit.oi{constructor(){super();this.resizeObserver=undefined;this.prevHeight="0px";this.prevHistoryLength=1;this.unsubscribe=[];this.view=esm.Pc.state.view;this.unsubscribe.push(esm.Pc.subscribeKey("view",(val=>this.onViewChange(val))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([content])=>{const height=`${content?.contentRect.height}px`;if(this.prevHeight!=="0px"){await this.animate([{height:this.prevHeight},{height}],{duration:150,easing:"ease",fill:"forwards"}).finished;this.style.height="auto"}this.prevHeight=height}));this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper());this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return lit.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return lit.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return lit.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return lit.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return lit.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return lit.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return lit.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return lit.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return lit.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return lit.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return lit.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return lit.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return lit.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return lit.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return lit.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return lit.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return lit.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return lit.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return lit.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return lit.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return lit.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return lit.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;default:return lit.dy`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(newView){const{history}=esm.Pc.state;let xOut=-10;let xIn=10;if(history.length<this.prevHistoryLength){xOut=10;xIn=-10}this.prevHistoryLength=history.length;await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${xOut}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished;this.view=newView;await this.animate([{opacity:0,transform:`translateX(${xIn}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};W3mRouter.styles=w3m_router_styles;w3m_router_decorate([(0,decorators.SB)()],W3mRouter.prototype,"view",void 0);W3mRouter=w3m_router_decorate([(0,dist_esm.customElement)("w3m-router")],W3mRouter);const w3m_account_view_styles=lit.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var w3m_account_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAccountView=class W3mAccountView extends lit.oi{constructor(){super();this.usubscribe=[];this.address=esm.Ni.state.address;this.profileImage=esm.Ni.state.profileImage;this.profileName=esm.Ni.state.profileName;this.balance=esm.Ni.state.balance;this.balanceSymbol=esm.Ni.state.balanceSymbol;this.network=esm.fB.state.caipNetwork;this.disconecting=false;this.usubscribe.push(...[esm.Ni.subscribe((val=>{if(val.address){this.address=val.address;this.profileImage=val.profileImage;this.profileName=val.profileName;this.balance=val.balance;this.balanceSymbol=val.balanceSymbol}else{esm.IN.close()}}))],esm.fB.subscribeKey("caipNetwork",(val=>{if(val?.id){this.network=val}})))}disconnectedCallback(){this.usubscribe.forEach((unsubscribe=>unsubscribe()))}render(){if(!this.address){throw new Error("w3m-account-view: No account provided")}const networkImage=esm.fz.getNetworkImage(this.network);return lit.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,if_defined.o)(this.profileImage===null?undefined:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?dist_esm.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):dist_esm.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${esm.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${networkImage?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,if_defined.o)(networkImage)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${true}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${false}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const type=esm.MO.getConnectedConnector();const emailConnector=esm.AA.getEmailConnector();const{origin}=location;if(!emailConnector||type!=="EMAIL"||origin.includes(esm.bq.SECURE_SITE)){return null}return lit.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const type=esm.MO.getConnectedConnector();const emailConnector=esm.AA.getEmailConnector();if(!emailConnector||type!=="EMAIL"){return null}const email=emailConnector.provider.getEmail()??"";return lit.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${true}
        @click=${()=>this.onGoToUpdateEmail(email)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${email}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl}=esm.Ni.state;if(!addressExplorerUrl){return null}return lit.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks}=esm.fB.state;const isMultiNetwork=requestedCaipNetworks?requestedCaipNetworks.length>1:false;const isValidNetwork=requestedCaipNetworks?.find((({id})=>id===this.network?.id));return isMultiNetwork||!isValidNetwork}onCopyAddress(){try{if(this.address){esm.j1.copyToClopboard(this.address);esm.KC.showSuccess("Address copied")}}catch{esm.KC.showError("Failed to copy")}}onNetworks(){if(this.isAllowedNetworkSwitch()){esm.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"});esm.Pc.push("Networks")}}onTransactions(){esm.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"});esm.Pc.push("Transactions")}async onDisconnect(){try{this.disconecting=true;await esm.lZ.disconnect();esm.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"});esm.IN.close()}catch{esm.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"});esm.KC.showError("Failed to disconnect")}finally{this.disconecting=false}}onExplorer(){const{addressExplorerUrl}=esm.Ni.state;if(addressExplorerUrl){esm.j1.openHref(addressExplorerUrl,"_blank")}}onGoToUpgradeView(){esm.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"});esm.Pc.push("UpgradeEmailWallet")}onGoToUpdateEmail(email){esm.Pc.push("UpdateEmailWallet",{email})}};W3mAccountView.styles=w3m_account_view_styles;w3m_account_view_decorate([(0,decorators.SB)()],W3mAccountView.prototype,"address",void 0);w3m_account_view_decorate([(0,decorators.SB)()],W3mAccountView.prototype,"profileImage",void 0);w3m_account_view_decorate([(0,decorators.SB)()],W3mAccountView.prototype,"profileName",void 0);w3m_account_view_decorate([(0,decorators.SB)()],W3mAccountView.prototype,"balance",void 0);w3m_account_view_decorate([(0,decorators.SB)()],W3mAccountView.prototype,"balanceSymbol",void 0);w3m_account_view_decorate([(0,decorators.SB)()],W3mAccountView.prototype,"network",void 0);w3m_account_view_decorate([(0,decorators.SB)()],W3mAccountView.prototype,"disconecting",void 0);W3mAccountView=w3m_account_view_decorate([(0,dist_esm.customElement)("w3m-account-view")],W3mAccountView);var w3m_all_wallets_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAllWalletsView=class W3mAllWalletsView extends lit.oi{constructor(){super(...arguments);this.search="";this.onDebouncedSearch=esm.j1.debounce((value=>{this.search=value}))}render(){const isSearch=this.search.length>=2;return lit.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch?lit.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:lit.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(event){this.onDebouncedSearch(event.detail)}qrButtonTemplate(){if(esm.j1.isMobile()){return lit.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `}return null}onWalletConnectQr(){esm.Pc.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,decorators.SB)()],W3mAllWalletsView.prototype,"search",void 0);W3mAllWalletsView=w3m_all_wallets_view_decorate([(0,dist_esm.customElement)("w3m-all-wallets-view")],W3mAllWalletsView);const w3m_connect_view_styles=lit.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var w3m_connect_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectView=class W3mConnectView extends lit.oi{constructor(){super();this.unsubscribe=[];this.connectors=esm.AA.state.connectors;this.unsubscribe.push(esm.AA.subscribeKey("connectors",(val=>this.connectors=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return lit.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(esm.j1.isMobile()){return null}const connector=this.connectors.find((c=>c.type==="WALLET_CONNECT"));if(!connector){return null}return lit.dy`
      <wui-list-wallet
        imageSrc=${(0,if_defined.o)(esm.fz.getConnectorImage(connector))}
        name=${connector.name??"Unknown"}
        @click=${()=>this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}customTemplate(){const{customWallets}=esm.hD.state;if(!customWallets?.length){return null}const wallets=this.filterOutDuplicateWallets(customWallets);return wallets.map((wallet=>lit.dy`
        <wui-list-wallet
          imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(wallet))}
          name=${wallet.name??"Unknown"}
          @click=${()=>this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `))}featuredTemplate(){const connector=this.connectors.find((c=>c.type==="WALLET_CONNECT"));if(!connector){return null}const{featured}=esm.QT.state;if(!featured.length){return null}const wallets=this.filterOutDuplicateWallets(featured);return wallets.map((wallet=>lit.dy`
        <wui-list-wallet
          imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(wallet))}
          name=${wallet.name??"Unknown"}
          @click=${()=>this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `))}recentTemplate(){const recent=esm.MO.getRecentWallets();return recent.map((wallet=>lit.dy`
        <wui-list-wallet
          imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(wallet))}
          name=${wallet.name??"Unknown"}
          @click=${()=>this.onConnectWallet(wallet)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((connector=>{if(connector.type!=="ANNOUNCED"){return null}return lit.dy`
        <wui-list-wallet
          imageSrc=${(0,if_defined.o)(esm.fz.getConnectorImage(connector))}
          name=${connector.name??"Unknown"}
          @click=${()=>this.onConnector(connector)}
          tagVariant="success"
          .installed=${true}
        >
        </wui-list-wallet>
      `}))}injectedTemplate(){return this.connectors.map((connector=>{if(connector.type!=="INJECTED"){return null}if(!esm.lZ.checkInstalled()){return null}return lit.dy`
        <wui-list-wallet
          imageSrc=${(0,if_defined.o)(esm.fz.getConnectorImage(connector))}
          .installed=${true}
          name=${connector.name??"Unknown"}
          @click=${()=>this.onConnector(connector)}
        >
        </wui-list-wallet>
      `}))}externalTemplate(){const announcedRdns=esm.AA.getAnnouncedConnectorRdns();return this.connectors.map((connector=>{if(["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(connector.type)){return null}if(announcedRdns.includes(esm.bq.CONNECTOR_RDNS_MAP[connector.id])){return null}return lit.dy`
        <wui-list-wallet
          imageSrc=${(0,if_defined.o)(esm.fz.getConnectorImage(connector))}
          name=${connector.name??"Unknown"}
          @click=${()=>this.onConnector(connector)}
        >
        </wui-list-wallet>
      `}))}allWalletsTemplate(){const connector=this.connectors.find((c=>c.type==="WALLET_CONNECT"));const{allWallets}=esm.hD.state;if(!connector||allWallets==="HIDE"){return null}if(allWallets==="ONLY_MOBILE"&&!esm.j1.isMobile()){return null}const count=esm.QT.state.count;const featuredCount=esm.QT.state.featured.length;const rawCount=count+featuredCount;const roundedCount=rawCount<10?rawCount:Math.floor(rawCount/10)*10;const tagLabel=roundedCount<rawCount?`${roundedCount}+`:`${roundedCount}`;return lit.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){const connector=this.connectors.find((c=>c.type==="WALLET_CONNECT"));if(!connector){return null}const{recommended}=esm.QT.state;const{customWallets,featuredWalletIds}=esm.hD.state;const{connectors}=esm.AA.state;const recent=esm.MO.getRecentWallets();const injected=connectors.filter((c=>c.type==="INJECTED"));const filteredInjected=injected.filter((i=>i.name!=="Browser Wallet"));if(featuredWalletIds||customWallets||!recommended.length){return null}const overrideLength=filteredInjected.length+recent.length;const maxRecommended=Math.max(0,2-overrideLength);const wallets=this.filterOutDuplicateWallets(recommended).slice(0,maxRecommended);return wallets.map((wallet=>lit.dy`
        <wui-list-wallet
          imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(wallet))}
          name=${wallet?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `))}onConnector(connector){if(connector.type==="WALLET_CONNECT"){if(esm.j1.isMobile()){esm.Pc.push("AllWallets")}else{esm.Pc.push("ConnectingWalletConnect")}}else{esm.Pc.push("ConnectingExternal",{connector})}}filterOutDuplicateWallets(wallets){const recent=esm.MO.getRecentWallets();const recentIds=recent.map((wallet=>wallet.id));const filtered=wallets.filter((wallet=>!recentIds.includes(wallet.id)));return filtered}onAllWallets(){esm.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"});esm.Pc.push("AllWallets")}onConnectWallet(wallet){esm.Pc.push("ConnectingWalletConnect",{wallet})}};W3mConnectView.styles=w3m_connect_view_styles;w3m_connect_view_decorate([(0,decorators.SB)()],W3mConnectView.prototype,"connectors",void 0);W3mConnectView=w3m_connect_view_decorate([(0,dist_esm.customElement)("w3m-connect-view")],W3mConnectView);const w3m_connecting_widget_styles=lit.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var w3m_connecting_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};class W3mConnectingWidget extends lit.oi{constructor(){super();this.wallet=esm.Pc.state.data?.wallet;this.connector=esm.Pc.state.data?.connector;this.timeout=undefined;this.secondaryBtnLabel="Try again";this.secondaryBtnIcon="refresh";this.secondaryLabel="Accept connection request in the wallet";this.onConnect=undefined;this.onRender=undefined;this.onAutoConnect=undefined;this.isWalletConnect=true;this.unsubscribe=[];this.imageSrc=esm.fz.getWalletImage(this.wallet)??esm.fz.getConnectorImage(this.connector);this.name=this.wallet?.name??this.connector?.name??"Wallet";this.isRetrying=false;this.uri=esm.lZ.state.wcUri;this.error=esm.lZ.state.wcError;this.ready=false;this.showRetry=false;this.buffering=false;this.isMobile=false;this.onRetry=undefined;this.unsubscribe.push(...[esm.lZ.subscribeKey("wcUri",(val=>{this.uri=val;if(this.isRetrying&&this.onRetry){this.isRetrying=false;this.onConnect?.()}})),esm.lZ.subscribeKey("wcError",(val=>this.error=val)),esm.lZ.subscribeKey("buffering",(val=>this.buffering=val))])}firstUpdated(){this.onAutoConnect?.();this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));clearTimeout(this.timeout)}render(){this.onRender?.();this.onShowRetry();const subLabel=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let label=`Continue in ${this.name}`;if(this.buffering){label="Connecting..."}if(this.error){label="Connection declined"}return lit.dy`
      <wui-flex
        data-error=${(0,if_defined.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,if_defined.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?lit.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=true;const retryButton=this.shadowRoot?.querySelector("wui-button");retryButton?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){if(!this.buffering){esm.lZ.setWcError(false);if(this.onRetry){this.isRetrying=true;this.onRetry?.()}else{this.onConnect?.()}}}loaderTemplate(){const borderRadiusMaster=esm.u0.state.themeVariables["--w3m-border-radius-master"];const radius=borderRadiusMaster?parseInt(borderRadiusMaster.replace("px",""),10):4;return lit.dy`<wui-loading-thumbnail radius=${radius*9}></wui-loading-thumbnail>`}onCopyUri(){try{if(this.uri){esm.j1.copyToClopboard(this.uri);esm.KC.showSuccess("Link copied")}}catch{esm.KC.showError("Failed to copy")}}}W3mConnectingWidget.styles=w3m_connecting_widget_styles;w3m_connecting_widget_decorate([(0,decorators.SB)()],W3mConnectingWidget.prototype,"uri",void 0);w3m_connecting_widget_decorate([(0,decorators.SB)()],W3mConnectingWidget.prototype,"error",void 0);w3m_connecting_widget_decorate([(0,decorators.SB)()],W3mConnectingWidget.prototype,"ready",void 0);w3m_connecting_widget_decorate([(0,decorators.SB)()],W3mConnectingWidget.prototype,"showRetry",void 0);w3m_connecting_widget_decorate([(0,decorators.SB)()],W3mConnectingWidget.prototype,"buffering",void 0);w3m_connecting_widget_decorate([(0,decorators.Cb)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0);w3m_connecting_widget_decorate([(0,decorators.Cb)()],W3mConnectingWidget.prototype,"onRetry",void 0);var w3m_connecting_external_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const platformMap={INJECTED:"browser",ANNOUNCED:"browser"};let W3mConnectingExternalView=class W3mConnectingExternalView extends W3mConnectingWidget{constructor(){super();if(!this.connector){throw new Error("w3m-connecting-view: No connector provided")}esm.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:platformMap[this.connector.type]??"external"}});this.onConnect=this.onConnectProxy.bind(this);this.onAutoConnect=this.onConnectProxy.bind(this);this.isWalletConnect=false}async onConnectProxy(){try{this.error=false;if(this.connector){if(this.connector.imageUrl){esm.MO.setConnectedWalletImageUrl(this.connector.imageUrl)}await esm.lZ.connectExternal(this.connector);if(esm.yD.state.isSiweEnabled){esm.Pc.push("ConnectingSiwe")}else{esm.IN.close()}esm.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}})}}catch(error){esm.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:error?.message??"Unknown"}});this.error=true}}};W3mConnectingExternalView=w3m_connecting_external_view_decorate([(0,dist_esm.customElement)("w3m-connecting-external-view")],W3mConnectingExternalView);var w3m_connecting_siwe_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingSiweView=class W3mConnectingSiweView extends lit.oi{constructor(){super(...arguments);this.dappName=esm.hD.state.metadata?.name;this.isSigning=false}render(){return lit.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${true}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${true}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=true;esm.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{esm.yD.setStatus("loading");const session=await esm.yD.signIn();esm.yD.setStatus("success");esm.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"});return session}catch(error){esm.KC.showError("Signature declined");esm.yD.setStatus("error");return esm.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=false}}async onCancel(){const{isConnected}=esm.Ni.state;if(isConnected){await esm.lZ.disconnect();esm.IN.close()}else{esm.Pc.push("Connect")}esm.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};w3m_connecting_siwe_view_decorate([(0,decorators.SB)()],W3mConnectingSiweView.prototype,"isSigning",void 0);W3mConnectingSiweView=w3m_connecting_siwe_view_decorate([(0,dist_esm.customElement)("w3m-connecting-siwe-view")],W3mConnectingSiweView);var w3m_connecting_wc_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcView=class W3mConnectingWcView extends lit.oi{constructor(){super();this.interval=undefined;this.lastRetry=Date.now();this.wallet=esm.Pc.state.data?.wallet;this.platform=undefined;this.platforms=[];this.initializeConnection();this.interval=setInterval(this.initializeConnection.bind(this),esm.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){if(!this.wallet){return lit.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}this.determinePlatforms();return lit.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `}async initializeConnection(retry=false){try{const{wcPairingExpiry}=esm.lZ.state;if(retry||esm.j1.isPairingExpired(wcPairingExpiry)){esm.lZ.connectWalletConnect();if(this.wallet){const url=esm.fz.getWalletImage(this.wallet);if(url){esm.MO.setConnectedWalletImageUrl(url)}}else{const connectors=esm.AA.state.connectors;const connector=connectors.find((c=>c.type==="WALLET_CONNECT"));const url=esm.fz.getConnectorImage(connector);if(url){esm.MO.setConnectedWalletImageUrl(url)}}await esm.lZ.state.wcPromise;this.finalizeConnection();if(esm.yD.state.isSiweEnabled){esm.Pc.push("ConnectingSiwe")}else{esm.IN.close()}}}catch(error){esm.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:error?.message??"Unknown"}});esm.lZ.setWcError(true);if(esm.j1.isAllowedRetry(this.lastRetry)){esm.KC.showError("Declined");this.lastRetry=Date.now();this.initializeConnection(true)}}}finalizeConnection(){const{wcLinking,recentWallet}=esm.lZ.state;if(wcLinking){esm.MO.setWalletConnectDeepLink(wcLinking)}if(recentWallet){esm.MO.setWeb3ModalRecent(recentWallet)}esm.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:wcLinking?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet){throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet")}if(this.platform){return}const{mobile_link,desktop_link,webapp_link,injected,rdns}=this.wallet;const injectedIds=injected?.map((({injected_id})=>injected_id)).filter(Boolean);const browserIds=rdns?[rdns]:injectedIds??[];const isBrowser=browserIds.length;const isMobileWc=mobile_link;const isWebWc=webapp_link;const isBrowserInstalled=esm.lZ.checkInstalled(browserIds);const isBrowserWc=isBrowser&&isBrowserInstalled;const isDesktopWc=desktop_link&&!esm.j1.isMobile();if(isBrowserWc){this.platforms.push("browser")}if(isMobileWc){this.platforms.push(esm.j1.isMobile()?"mobile":"qrcode")}if(isWebWc){this.platforms.push("web")}if(isDesktopWc){this.platforms.push("desktop")}if(!isBrowserWc&&isBrowser){this.platforms.push("unsupported")}this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return lit.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return lit.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return lit.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(true)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return lit.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return lit.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return lit.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){const multiPlatform=this.platforms.length>1;if(!multiPlatform){return null}return lit.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `}async onSelectPlatform(platform){const container=this.shadowRoot?.querySelector("div");if(container){await container.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.platform=platform;container.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}};w3m_connecting_wc_view_decorate([(0,decorators.SB)()],W3mConnectingWcView.prototype,"platform",void 0);w3m_connecting_wc_view_decorate([(0,decorators.SB)()],W3mConnectingWcView.prototype,"platforms",void 0);W3mConnectingWcView=w3m_connecting_wc_view_decorate([(0,dist_esm.customElement)("w3m-connecting-wc-view")],W3mConnectingWcView);var w3m_downloads_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mDownloadsView=class W3mDownloadsView extends lit.oi{constructor(){super(...arguments);this.wallet=esm.Pc.state.data?.wallet}render(){if(!this.wallet){throw new Error("w3m-downloads-view")}return lit.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){if(!this.wallet?.chrome_store){return null}return lit.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`}iosTemplate(){if(!this.wallet?.app_store){return null}return lit.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`}androidTemplate(){if(!this.wallet?.play_store){return null}return lit.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`}homepageTemplate(){if(!this.wallet?.homepage){return null}return lit.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `}onChromeStore(){if(this.wallet?.chrome_store){esm.j1.openHref(this.wallet.chrome_store,"_blank")}}onAppStore(){if(this.wallet?.app_store){esm.j1.openHref(this.wallet.app_store,"_blank")}}onPlayStore(){if(this.wallet?.play_store){esm.j1.openHref(this.wallet.play_store,"_blank")}}onHomePage(){if(this.wallet?.homepage){esm.j1.openHref(this.wallet.homepage,"_blank")}}};W3mDownloadsView=w3m_downloads_view_decorate([(0,dist_esm.customElement)("w3m-downloads-view")],W3mDownloadsView);var w3m_get_wallet_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const EXPLORER="https://walletconnect.com/explorer";let W3mGetWalletView=class W3mGetWalletView extends lit.oi{render(){return lit.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{esm.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended,featured}=esm.QT.state;const{customWallets}=esm.hD.state;const wallets=[...featured,...customWallets??[],...recommended].slice(0,4);return wallets.map((wallet=>lit.dy`
        <wui-list-wallet
          name=${wallet.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(wallet))}
          @click=${()=>{esm.j1.openHref(wallet.homepage??EXPLORER,"_blank")}}
        ></wui-list-wallet>
      `))}};W3mGetWalletView=w3m_get_wallet_view_decorate([(0,dist_esm.customElement)("w3m-get-wallet-view")],W3mGetWalletView);const w3m_network_switch_view_styles=lit.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var w3m_network_switch_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mNetworkSwitchView=class W3mNetworkSwitchView extends lit.oi{constructor(){super();this.network=esm.Pc.state.data?.network;this.unsubscribe=[];this.showRetry=false;this.error=false}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network){throw new Error("w3m-network-switch-view: No network provided")}this.onShowRetry();const label=this.error?"Switch declined":"Approve in wallet";const subLabel=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return lit.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,if_defined.o)(esm.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:lit.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=true;const retryButton=this.shadowRoot?.querySelector("wui-button");retryButton?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=false;if(this.network){await esm.fB.switchActiveNetwork(this.network);if(!esm.yD.state.isSiweEnabled){esm._4.navigateAfterNetworkSwitch()}}}catch{this.error=true}}};W3mNetworkSwitchView.styles=w3m_network_switch_view_styles;w3m_network_switch_view_decorate([(0,decorators.SB)()],W3mNetworkSwitchView.prototype,"showRetry",void 0);w3m_network_switch_view_decorate([(0,decorators.SB)()],W3mNetworkSwitchView.prototype,"error",void 0);W3mNetworkSwitchView=w3m_network_switch_view_decorate([(0,dist_esm.customElement)("w3m-network-switch-view")],W3mNetworkSwitchView);const w3m_networks_view_styles=lit.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var w3m_networks_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mNetworksView=class W3mNetworksView extends lit.oi{constructor(){super();this.unsubscribe=[];this.caipNetwork=esm.fB.state.caipNetwork;this.unsubscribe.push(esm.fB.subscribeKey("caipNetwork",(val=>this.caipNetwork=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return lit.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){esm.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"});esm.Pc.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds,requestedCaipNetworks,supportsAllNetworks}=esm.fB.state;const approvedIds=approvedCaipNetworkIds;const sortedNetworks=esm.j1.sortRequestedNetworks(approvedCaipNetworkIds,requestedCaipNetworks);return sortedNetworks?.map((network=>lit.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===network.id}
          imageSrc=${(0,if_defined.o)(esm.fz.getNetworkImage(network))}
          type="network"
          name=${network.name??network.id}
          @click=${()=>this.onSwitchNetwork(network)}
          .disabled=${!supportsAllNetworks&&!approvedIds?.includes(network.id)}
          data-testid=${`w3m-network-switch-${network.name??network.id}`}
        ></wui-card-select>
      `))}async onSwitchNetwork(network){const{isConnected}=esm.Ni.state;const{approvedCaipNetworkIds,supportsAllNetworks,caipNetwork}=esm.fB.state;const{data}=esm.Pc.state;if(isConnected&&caipNetwork?.id!==network.id){if(approvedCaipNetworkIds?.includes(network.id)){await esm.fB.switchActiveNetwork(network);esm._4.navigateAfterNetworkSwitch()}else if(supportsAllNetworks){esm.Pc.push("SwitchNetwork",{...data,network})}}else if(!isConnected){esm.fB.setCaipNetwork(network);esm.Pc.push("Connect")}}};W3mNetworksView.styles=w3m_networks_view_styles;w3m_networks_view_decorate([(0,decorators.SB)()],W3mNetworksView.prototype,"caipNetwork",void 0);W3mNetworksView=w3m_networks_view_decorate([(0,dist_esm.customElement)("w3m-networks-view")],W3mNetworksView);var common_dist_esm=__webpack_require__(70384);const w3m_transactions_view_styles=lit.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var w3m_transactions_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const PAGINATOR_ID="last-transaction";const LOADING_ITEM_COUNT=7;let W3mTransactionsView=class W3mTransactionsView extends lit.oi{constructor(){super();this.unsubscribe=[];this.paginationObserver=undefined;this.address=esm.Ni.state.address;this.transactions=esm.sl.state.transactions;this.transactionsByYear=esm.sl.state.transactionsByYear;this.loading=esm.sl.state.loading;this.empty=esm.sl.state.empty;this.next=esm.sl.state.next;this.unsubscribe.push(...[esm.Ni.subscribe((val=>{if(val.isConnected){if(this.address!==val.address){this.address=val.address;esm.sl.resetTransactions();esm.sl.fetchTransactions(val.address)}}})),esm.sl.subscribe((val=>{this.transactions=val.transactions;this.transactionsByYear=val.transactionsByYear;this.loading=val.loading;this.empty=val.empty;this.next=val.next}))])}firstUpdated(){if(this.transactions.length===0){esm.sl.fetchTransactions(this.address)}this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return lit.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const sortedYearKeys=Object.keys(this.transactionsByYear).sort().reverse();return sortedYearKeys.map(((year,index)=>{const isLastGroup=index===sortedYearKeys.length-1;const yearInt=parseInt(year,10);const sortedMonthIndexes=new Array(12).fill(null).map(((_,idx)=>idx)).reverse();return sortedMonthIndexes.map((month=>{const groupTitle=dist_esm.TransactionUtil.getTransactionGroupTitle(yearInt,month);const transactions=this.transactionsByYear[yearInt]?.[month];if(!transactions){return null}return lit.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions,isLastGroup)}
            </wui-flex>
          </wui-flex>
        `}))}))}templateRenderTransaction(transaction,isLastTransaction){const{date,descriptions,direction,isAllNFT,images,status,transfers,type}=this.getTransactionListItemProps(transaction);const haveMultipleTransfers=transfers?.length>1;const haveTwoTransfers=transfers?.length===2;if(haveTwoTransfers&&!isAllNFT){return lit.dy`
        <wui-transaction-list-item
          date=${date}
          .direction=${direction}
          id=${isLastTransaction&&this.next?PAGINATOR_ID:""}
          status=${status}
          type=${type}
          .images=${images}
          .descriptions=${descriptions}
        ></wui-transaction-list-item>
      `}if(haveMultipleTransfers){return transfers.map(((transfer,index)=>{const description=dist_esm.TransactionUtil.getTransferDescription(transfer);const isLastTransfer=isLastTransaction&&index===transfers.length-1;return lit.dy` <wui-transaction-list-item
          date=${date}
          direction=${transfer.direction}
          id=${isLastTransfer&&this.next?PAGINATOR_ID:""}
          status=${status}
          type=${type}
          .onlyDirectionIcon=${true}
          .images=${[images?.[index]]}
          .descriptions=${[description]}
        ></wui-transaction-list-item>`}))}return lit.dy`
      <wui-transaction-list-item
        date=${date}
        .direction=${direction}
        id=${isLastTransaction&&this.next?PAGINATOR_ID:""}
        status=${status}
        type=${type}
        .images=${images}
        .descriptions=${descriptions}
      ></wui-transaction-list-item>
    `}templateTransactions(transactions,isLastGroup){return transactions.map(((transaction,index)=>{const isLastTransaction=isLastGroup&&index===transactions.length-1;return lit.dy`${this.templateRenderTransaction(transaction,isLastTransaction)}`}))}templateEmpty(){return lit.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${true}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(LOADING_ITEM_COUNT).fill(lit.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item=>item))}createPaginationObserver(){const{projectId}=esm.hD.state;this.paginationObserver=new IntersectionObserver((([element])=>{if(element?.isIntersecting&&!this.loading){esm.sl.fetchTransactions(this.address);esm.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId,cursor:this.next}})}}),{});this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const lastItem=this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);if(lastItem){this.paginationObserver?.observe(lastItem)}}getTransactionListItemProps(transaction){const date=common_dist_esm.E.formatDate(transaction?.metadata?.minedAt);const descriptions=dist_esm.TransactionUtil.getTransactionDescriptions(transaction);const transfers=transaction?.transfers;const transfer=transaction?.transfers?.[0];const isAllNFT=Boolean(transfer)&&transaction?.transfers?.every((item=>Boolean(item.nft_info)));const images=dist_esm.TransactionUtil.getTransactionImages(transfers);return{date,direction:transfer?.direction,descriptions,isAllNFT,images,status:transaction.metadata?.status,transfers,type:transaction.metadata?.operationType}}};W3mTransactionsView.styles=w3m_transactions_view_styles;w3m_transactions_view_decorate([(0,decorators.SB)()],W3mTransactionsView.prototype,"address",void 0);w3m_transactions_view_decorate([(0,decorators.SB)()],W3mTransactionsView.prototype,"transactions",void 0);w3m_transactions_view_decorate([(0,decorators.SB)()],W3mTransactionsView.prototype,"transactionsByYear",void 0);w3m_transactions_view_decorate([(0,decorators.SB)()],W3mTransactionsView.prototype,"loading",void 0);w3m_transactions_view_decorate([(0,decorators.SB)()],W3mTransactionsView.prototype,"empty",void 0);w3m_transactions_view_decorate([(0,decorators.SB)()],W3mTransactionsView.prototype,"next",void 0);W3mTransactionsView=w3m_transactions_view_decorate([(0,dist_esm.customElement)("w3m-transactions-view")],W3mTransactionsView);var w3m_what_is_a_network_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const data=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let W3mWhatIsANetworkView=class W3mWhatIsANetworkView extends lit.oi{render(){return lit.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{esm.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};W3mWhatIsANetworkView=w3m_what_is_a_network_view_decorate([(0,dist_esm.customElement)("w3m-what-is-a-network-view")],W3mWhatIsANetworkView);var w3m_what_is_a_wallet_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const w3m_what_is_a_wallet_view_data=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let W3mWhatIsAWalletView=class W3mWhatIsAWalletView extends lit.oi{render(){return lit.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${w3m_what_is_a_wallet_view_data}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){esm.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"});esm.Pc.push("GetWallet")}};W3mWhatIsAWalletView=w3m_what_is_a_wallet_view_decorate([(0,dist_esm.customElement)("w3m-what-is-a-wallet-view")],W3mWhatIsAWalletView);const w3m_email_otp_widget_styles=lit.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;const W3mFrameConstants_W3mFrameConstants={SECURE_SITE_SDK:"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"};const W3mFrameConstants_W3mFrameRpcConstants={SAFE_RPC_METHODS:["eth_blockNumber","eth_estimateGas","eth_getTransactionByHash"],GET_CHAIN_ID:"eth_chainId"};var util;(function(util){util.assertEqual=val=>val;function assertIs(_arg){}util.assertIs=assertIs;function assertNever(_x){throw new Error}util.assertNever=assertNever;util.arrayToEnum=items=>{const obj={};for(const item of items){obj[item]=item}return obj};util.getValidEnumValues=obj=>{const validKeys=util.objectKeys(obj).filter((k=>typeof obj[obj[k]]!=="number"));const filtered={};for(const k of validKeys){filtered[k]=obj[k]}return util.objectValues(filtered)};util.objectValues=obj=>util.objectKeys(obj).map((function(e){return obj[e]}));util.objectKeys=typeof Object.keys==="function"?obj=>Object.keys(obj):object=>{const keys=[];for(const key in object){if(Object.prototype.hasOwnProperty.call(object,key)){keys.push(key)}}return keys};util.find=(arr,checker)=>{for(const item of arr){if(checker(item))return item}return undefined};util.isInteger=typeof Number.isInteger==="function"?val=>Number.isInteger(val):val=>typeof val==="number"&&isFinite(val)&&Math.floor(val)===val;function joinValues(array,separator=" | "){return array.map((val=>typeof val==="string"?`'${val}'`:val)).join(separator)}util.joinValues=joinValues;util.jsonStringifyReplacer=(_,value)=>{if(typeof value==="bigint"){return value.toString()}return value}})(util||(util={}));var objectUtil;(function(objectUtil){objectUtil.mergeShapes=(first,second)=>({...first,...second})})(objectUtil||(objectUtil={}));const ZodParsedType=util.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]);const getParsedType=data=>{const t=typeof data;switch(t){case"undefined":return ZodParsedType.undefined;case"string":return ZodParsedType.string;case"number":return isNaN(data)?ZodParsedType.nan:ZodParsedType.number;case"boolean":return ZodParsedType.boolean;case"function":return ZodParsedType.function;case"bigint":return ZodParsedType.bigint;case"symbol":return ZodParsedType.symbol;case"object":if(Array.isArray(data)){return ZodParsedType.array}if(data===null){return ZodParsedType.null}if(data.then&&typeof data.then==="function"&&data.catch&&typeof data.catch==="function"){return ZodParsedType.promise}if(typeof Map!=="undefined"&&data instanceof Map){return ZodParsedType.map}if(typeof Set!=="undefined"&&data instanceof Set){return ZodParsedType.set}if(typeof Date!=="undefined"&&data instanceof Date){return ZodParsedType.date}return ZodParsedType.object;default:return ZodParsedType.unknown}};const ZodIssueCode=util.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);const quotelessJson=obj=>{const json=JSON.stringify(obj,null,2);return json.replace(/"([^"]+)":/g,"$1:")};class ZodError extends Error{constructor(issues){super();this.issues=[];this.addIssue=sub=>{this.issues=[...this.issues,sub]};this.addIssues=(subs=[])=>{this.issues=[...this.issues,...subs]};const actualProto=new.target.prototype;if(Object.setPrototypeOf){Object.setPrototypeOf(this,actualProto)}else{this.__proto__=actualProto}this.name="ZodError";this.issues=issues}get errors(){return this.issues}format(_mapper){const mapper=_mapper||function(issue){return issue.message};const fieldErrors={_errors:[]};const processError=error=>{for(const issue of error.issues){if(issue.code==="invalid_union"){issue.unionErrors.map(processError)}else if(issue.code==="invalid_return_type"){processError(issue.returnTypeError)}else if(issue.code==="invalid_arguments"){processError(issue.argumentsError)}else if(issue.path.length===0){fieldErrors._errors.push(mapper(issue))}else{let curr=fieldErrors;let i=0;while(i<issue.path.length){const el=issue.path[i];const terminal=i===issue.path.length-1;if(!terminal){curr[el]=curr[el]||{_errors:[]}}else{curr[el]=curr[el]||{_errors:[]};curr[el]._errors.push(mapper(issue))}curr=curr[el];i++}}}};processError(this);return fieldErrors}toString(){return this.message}get message(){return JSON.stringify(this.issues,util.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(mapper=(issue=>issue.message)){const fieldErrors={};const formErrors=[];for(const sub of this.issues){if(sub.path.length>0){fieldErrors[sub.path[0]]=fieldErrors[sub.path[0]]||[];fieldErrors[sub.path[0]].push(mapper(sub))}else{formErrors.push(mapper(sub))}}return{formErrors,fieldErrors}}get formErrors(){return this.flatten()}}ZodError.create=issues=>{const error=new ZodError(issues);return error};const errorMap=(issue,_ctx)=>{let message;switch(issue.code){case ZodIssueCode.invalid_type:if(issue.received===ZodParsedType.undefined){message="Required"}else{message=`Expected ${issue.expected}, received ${issue.received}`}break;case ZodIssueCode.invalid_literal:message=`Invalid literal value, expected ${JSON.stringify(issue.expected,util.jsonStringifyReplacer)}`;break;case ZodIssueCode.unrecognized_keys:message=`Unrecognized key(s) in object: ${util.joinValues(issue.keys,", ")}`;break;case ZodIssueCode.invalid_union:message=`Invalid input`;break;case ZodIssueCode.invalid_union_discriminator:message=`Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;break;case ZodIssueCode.invalid_enum_value:message=`Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;break;case ZodIssueCode.invalid_arguments:message=`Invalid function arguments`;break;case ZodIssueCode.invalid_return_type:message=`Invalid function return type`;break;case ZodIssueCode.invalid_date:message=`Invalid date`;break;case ZodIssueCode.invalid_string:if(typeof issue.validation==="object"){if("includes"in issue.validation){message=`Invalid input: must include "${issue.validation.includes}"`;if(typeof issue.validation.position==="number"){message=`${message} at one or more positions greater than or equal to ${issue.validation.position}`}}else if("startsWith"in issue.validation){message=`Invalid input: must start with "${issue.validation.startsWith}"`}else if("endsWith"in issue.validation){message=`Invalid input: must end with "${issue.validation.endsWith}"`}else{util.assertNever(issue.validation)}}else if(issue.validation!=="regex"){message=`Invalid ${issue.validation}`}else{message="Invalid"}break;case ZodIssueCode.too_small:if(issue.type==="array")message=`Array must contain ${issue.exact?"exactly":issue.inclusive?`at least`:`more than`} ${issue.minimum} element(s)`;else if(issue.type==="string")message=`String must contain ${issue.exact?"exactly":issue.inclusive?`at least`:`over`} ${issue.minimum} character(s)`;else if(issue.type==="number")message=`Number must be ${issue.exact?`exactly equal to `:issue.inclusive?`greater than or equal to `:`greater than `}${issue.minimum}`;else if(issue.type==="date")message=`Date must be ${issue.exact?`exactly equal to `:issue.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(issue.minimum))}`;else message="Invalid input";break;case ZodIssueCode.too_big:if(issue.type==="array")message=`Array must contain ${issue.exact?`exactly`:issue.inclusive?`at most`:`less than`} ${issue.maximum} element(s)`;else if(issue.type==="string")message=`String must contain ${issue.exact?`exactly`:issue.inclusive?`at most`:`under`} ${issue.maximum} character(s)`;else if(issue.type==="number")message=`Number must be ${issue.exact?`exactly`:issue.inclusive?`less than or equal to`:`less than`} ${issue.maximum}`;else if(issue.type==="bigint")message=`BigInt must be ${issue.exact?`exactly`:issue.inclusive?`less than or equal to`:`less than`} ${issue.maximum}`;else if(issue.type==="date")message=`Date must be ${issue.exact?`exactly`:issue.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(issue.maximum))}`;else message="Invalid input";break;case ZodIssueCode.custom:message=`Invalid input`;break;case ZodIssueCode.invalid_intersection_types:message=`Intersection results could not be merged`;break;case ZodIssueCode.not_multiple_of:message=`Number must be a multiple of ${issue.multipleOf}`;break;case ZodIssueCode.not_finite:message="Number must be finite";break;default:message=_ctx.defaultError;util.assertNever(issue)}return{message}};let overrideErrorMap=errorMap;function setErrorMap(map){overrideErrorMap=map}function getErrorMap(){return overrideErrorMap}const makeIssue=params=>{const{data,path,errorMaps,issueData}=params;const fullPath=[...path,...issueData.path||[]];const fullIssue={...issueData,path:fullPath};let errorMessage="";const maps=errorMaps.filter((m=>!!m)).slice().reverse();for(const map of maps){errorMessage=map(fullIssue,{data,defaultError:errorMessage}).message}return{...issueData,path:fullPath,message:issueData.message||errorMessage}};const EMPTY_PATH=[];function addIssueToContext(ctx,issueData){const issue=makeIssue({issueData,data:ctx.data,path:ctx.path,errorMaps:[ctx.common.contextualErrorMap,ctx.schemaErrorMap,getErrorMap(),errorMap].filter((x=>!!x))});ctx.common.issues.push(issue)}class ParseStatus{constructor(){this.value="valid"}dirty(){if(this.value==="valid")this.value="dirty"}abort(){if(this.value!=="aborted")this.value="aborted"}static mergeArray(status,results){const arrayValue=[];for(const s of results){if(s.status==="aborted")return INVALID;if(s.status==="dirty")status.dirty();arrayValue.push(s.value)}return{status:status.value,value:arrayValue}}static async mergeObjectAsync(status,pairs){const syncPairs=[];for(const pair of pairs){syncPairs.push({key:await pair.key,value:await pair.value})}return ParseStatus.mergeObjectSync(status,syncPairs)}static mergeObjectSync(status,pairs){const finalObject={};for(const pair of pairs){const{key,value}=pair;if(key.status==="aborted")return INVALID;if(value.status==="aborted")return INVALID;if(key.status==="dirty")status.dirty();if(value.status==="dirty")status.dirty();if(key.value!=="__proto__"&&(typeof value.value!=="undefined"||pair.alwaysSet)){finalObject[key.value]=value.value}}return{status:status.value,value:finalObject}}}const INVALID=Object.freeze({status:"aborted"});const DIRTY=value=>({status:"dirty",value});const OK=value=>({status:"valid",value});const isAborted=x=>x.status==="aborted";const isDirty=x=>x.status==="dirty";const isValid=x=>x.status==="valid";const isAsync=x=>typeof Promise!=="undefined"&&x instanceof Promise;var errorUtil;(function(errorUtil){errorUtil.errToObj=message=>typeof message==="string"?{message}:message||{};errorUtil.toString=message=>typeof message==="string"?message:message===null||message===void 0?void 0:message.message})(errorUtil||(errorUtil={}));class ParseInputLazyPath{constructor(parent,value,path,key){this._cachedPath=[];this.parent=parent;this.data=value;this._path=path;this._key=key}get path(){if(!this._cachedPath.length){if(this._key instanceof Array){this._cachedPath.push(...this._path,...this._key)}else{this._cachedPath.push(...this._path,this._key)}}return this._cachedPath}}const handleResult=(ctx,result)=>{if(isValid(result)){return{success:true,data:result.value}}else{if(!ctx.common.issues.length){throw new Error("Validation failed but no issues detected.")}return{success:false,get error(){if(this._error)return this._error;const error=new ZodError(ctx.common.issues);this._error=error;return this._error}}}};function processCreateParams(params){if(!params)return{};const{errorMap,invalid_type_error,required_error,description}=params;if(errorMap&&(invalid_type_error||required_error)){throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`)}if(errorMap)return{errorMap,description};const customMap=(iss,ctx)=>{if(iss.code!=="invalid_type")return{message:ctx.defaultError};if(typeof ctx.data==="undefined"){return{message:required_error!==null&&required_error!==void 0?required_error:ctx.defaultError}}return{message:invalid_type_error!==null&&invalid_type_error!==void 0?invalid_type_error:ctx.defaultError}};return{errorMap:customMap,description}}class ZodType{constructor(def){this.spa=this.safeParseAsync;this._def=def;this.parse=this.parse.bind(this);this.safeParse=this.safeParse.bind(this);this.parseAsync=this.parseAsync.bind(this);this.safeParseAsync=this.safeParseAsync.bind(this);this.spa=this.spa.bind(this);this.refine=this.refine.bind(this);this.refinement=this.refinement.bind(this);this.superRefine=this.superRefine.bind(this);this.optional=this.optional.bind(this);this.nullable=this.nullable.bind(this);this.nullish=this.nullish.bind(this);this.array=this.array.bind(this);this.promise=this.promise.bind(this);this.or=this.or.bind(this);this.and=this.and.bind(this);this.transform=this.transform.bind(this);this.brand=this.brand.bind(this);this.default=this.default.bind(this);this.catch=this.catch.bind(this);this.describe=this.describe.bind(this);this.pipe=this.pipe.bind(this);this.readonly=this.readonly.bind(this);this.isNullable=this.isNullable.bind(this);this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(input){return getParsedType(input.data)}_getOrReturnCtx(input,ctx){return ctx||{common:input.parent.common,data:input.data,parsedType:getParsedType(input.data),schemaErrorMap:this._def.errorMap,path:input.path,parent:input.parent}}_processInputParams(input){return{status:new ParseStatus,ctx:{common:input.parent.common,data:input.data,parsedType:getParsedType(input.data),schemaErrorMap:this._def.errorMap,path:input.path,parent:input.parent}}}_parseSync(input){const result=this._parse(input);if(isAsync(result)){throw new Error("Synchronous parse encountered promise.")}return result}_parseAsync(input){const result=this._parse(input);return Promise.resolve(result)}parse(data,params){const result=this.safeParse(data,params);if(result.success)return result.data;throw result.error}safeParse(data,params){var _a;const ctx={common:{issues:[],async:(_a=params===null||params===void 0?void 0:params.async)!==null&&_a!==void 0?_a:false,contextualErrorMap:params===null||params===void 0?void 0:params.errorMap},path:(params===null||params===void 0?void 0:params.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data,parsedType:getParsedType(data)};const result=this._parseSync({data,path:ctx.path,parent:ctx});return handleResult(ctx,result)}async parseAsync(data,params){const result=await this.safeParseAsync(data,params);if(result.success)return result.data;throw result.error}async safeParseAsync(data,params){const ctx={common:{issues:[],contextualErrorMap:params===null||params===void 0?void 0:params.errorMap,async:true},path:(params===null||params===void 0?void 0:params.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data,parsedType:getParsedType(data)};const maybeAsyncResult=this._parse({data,path:ctx.path,parent:ctx});const result=await(isAsync(maybeAsyncResult)?maybeAsyncResult:Promise.resolve(maybeAsyncResult));return handleResult(ctx,result)}refine(check,message){const getIssueProperties=val=>{if(typeof message==="string"||typeof message==="undefined"){return{message}}else if(typeof message==="function"){return message(val)}else{return message}};return this._refinement(((val,ctx)=>{const result=check(val);const setError=()=>ctx.addIssue({code:ZodIssueCode.custom,...getIssueProperties(val)});if(typeof Promise!=="undefined"&&result instanceof Promise){return result.then((data=>{if(!data){setError();return false}else{return true}}))}if(!result){setError();return false}else{return true}}))}refinement(check,refinementData){return this._refinement(((val,ctx)=>{if(!check(val)){ctx.addIssue(typeof refinementData==="function"?refinementData(val,ctx):refinementData);return false}else{return true}}))}_refinement(refinement){return new ZodEffects({schema:this,typeName:ZodFirstPartyTypeKind.ZodEffects,effect:{type:"refinement",refinement}})}superRefine(refinement){return this._refinement(refinement)}optional(){return ZodOptional.create(this,this._def)}nullable(){return ZodNullable.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ZodArray.create(this,this._def)}promise(){return ZodPromise.create(this,this._def)}or(option){return ZodUnion.create([this,option],this._def)}and(incoming){return ZodIntersection.create(this,incoming,this._def)}transform(transform){return new ZodEffects({...processCreateParams(this._def),schema:this,typeName:ZodFirstPartyTypeKind.ZodEffects,effect:{type:"transform",transform}})}default(def){const defaultValueFunc=typeof def==="function"?def:()=>def;return new ZodDefault({...processCreateParams(this._def),innerType:this,defaultValue:defaultValueFunc,typeName:ZodFirstPartyTypeKind.ZodDefault})}brand(){return new ZodBranded({typeName:ZodFirstPartyTypeKind.ZodBranded,type:this,...processCreateParams(this._def)})}catch(def){const catchValueFunc=typeof def==="function"?def:()=>def;return new ZodCatch({...processCreateParams(this._def),innerType:this,catchValue:catchValueFunc,typeName:ZodFirstPartyTypeKind.ZodCatch})}describe(description){const This=this.constructor;return new This({...this._def,description})}pipe(target){return ZodPipeline.create(this,target)}readonly(){return ZodReadonly.create(this)}isOptional(){return this.safeParse(undefined).success}isNullable(){return this.safeParse(null).success}}const cuidRegex=/^c[^\s-]{8,}$/i;const cuid2Regex=/^[a-z][a-z0-9]*$/;const ulidRegex=/^[0-9A-HJKMNP-TV-Z]{26}$/;const uuidRegex=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;const emailRegex=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;const _emojiRegex=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;let emojiRegex;const ipv4Regex=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;const ipv6Regex=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;const datetimeRegex=args=>{if(args.precision){if(args.offset){return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`)}else{return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`)}}else if(args.precision===0){if(args.offset){return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`)}else{return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`)}}else{if(args.offset){return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`)}else{return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`)}}};function isValidIP(ip,version){if((version==="v4"||!version)&&ipv4Regex.test(ip)){return true}if((version==="v6"||!version)&&ipv6Regex.test(ip)){return true}return false}class ZodString extends ZodType{_parse(input){if(this._def.coerce){input.data=String(input.data)}const parsedType=this._getType(input);if(parsedType!==ZodParsedType.string){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.string,received:ctx.parsedType});return INVALID}const status=new ParseStatus;let ctx=undefined;for(const check of this._def.checks){if(check.kind==="min"){if(input.data.length<check.value){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_small,minimum:check.value,type:"string",inclusive:true,exact:false,message:check.message});status.dirty()}}else if(check.kind==="max"){if(input.data.length>check.value){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_big,maximum:check.value,type:"string",inclusive:true,exact:false,message:check.message});status.dirty()}}else if(check.kind==="length"){const tooBig=input.data.length>check.value;const tooSmall=input.data.length<check.value;if(tooBig||tooSmall){ctx=this._getOrReturnCtx(input,ctx);if(tooBig){addIssueToContext(ctx,{code:ZodIssueCode.too_big,maximum:check.value,type:"string",inclusive:true,exact:true,message:check.message})}else if(tooSmall){addIssueToContext(ctx,{code:ZodIssueCode.too_small,minimum:check.value,type:"string",inclusive:true,exact:true,message:check.message})}status.dirty()}}else if(check.kind==="email"){if(!emailRegex.test(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"email",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="emoji"){if(!emojiRegex){emojiRegex=new RegExp(_emojiRegex,"u")}if(!emojiRegex.test(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"emoji",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="uuid"){if(!uuidRegex.test(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"uuid",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="cuid"){if(!cuidRegex.test(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"cuid",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="cuid2"){if(!cuid2Regex.test(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"cuid2",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="ulid"){if(!ulidRegex.test(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"ulid",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="url"){try{new URL(input.data)}catch(_a){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"url",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="regex"){check.regex.lastIndex=0;const testResult=check.regex.test(input.data);if(!testResult){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"regex",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else if(check.kind==="trim"){input.data=input.data.trim()}else if(check.kind==="includes"){if(!input.data.includes(check.value,check.position)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.invalid_string,validation:{includes:check.value,position:check.position},message:check.message});status.dirty()}}else if(check.kind==="toLowerCase"){input.data=input.data.toLowerCase()}else if(check.kind==="toUpperCase"){input.data=input.data.toUpperCase()}else if(check.kind==="startsWith"){if(!input.data.startsWith(check.value)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.invalid_string,validation:{startsWith:check.value},message:check.message});status.dirty()}}else if(check.kind==="endsWith"){if(!input.data.endsWith(check.value)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.invalid_string,validation:{endsWith:check.value},message:check.message});status.dirty()}}else if(check.kind==="datetime"){const regex=datetimeRegex(check);if(!regex.test(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.invalid_string,validation:"datetime",message:check.message});status.dirty()}}else if(check.kind==="ip"){if(!isValidIP(input.data,check.version)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{validation:"ip",code:ZodIssueCode.invalid_string,message:check.message});status.dirty()}}else{util.assertNever(check)}}return{status:status.value,value:input.data}}_regex(regex,validation,message){return this.refinement((data=>regex.test(data)),{validation,code:ZodIssueCode.invalid_string,...errorUtil.errToObj(message)})}_addCheck(check){return new ZodString({...this._def,checks:[...this._def.checks,check]})}email(message){return this._addCheck({kind:"email",...errorUtil.errToObj(message)})}url(message){return this._addCheck({kind:"url",...errorUtil.errToObj(message)})}emoji(message){return this._addCheck({kind:"emoji",...errorUtil.errToObj(message)})}uuid(message){return this._addCheck({kind:"uuid",...errorUtil.errToObj(message)})}cuid(message){return this._addCheck({kind:"cuid",...errorUtil.errToObj(message)})}cuid2(message){return this._addCheck({kind:"cuid2",...errorUtil.errToObj(message)})}ulid(message){return this._addCheck({kind:"ulid",...errorUtil.errToObj(message)})}ip(options){return this._addCheck({kind:"ip",...errorUtil.errToObj(options)})}datetime(options){var _a;if(typeof options==="string"){return this._addCheck({kind:"datetime",precision:null,offset:false,message:options})}return this._addCheck({kind:"datetime",precision:typeof(options===null||options===void 0?void 0:options.precision)==="undefined"?null:options===null||options===void 0?void 0:options.precision,offset:(_a=options===null||options===void 0?void 0:options.offset)!==null&&_a!==void 0?_a:false,...errorUtil.errToObj(options===null||options===void 0?void 0:options.message)})}regex(regex,message){return this._addCheck({kind:"regex",regex,...errorUtil.errToObj(message)})}includes(value,options){return this._addCheck({kind:"includes",value,position:options===null||options===void 0?void 0:options.position,...errorUtil.errToObj(options===null||options===void 0?void 0:options.message)})}startsWith(value,message){return this._addCheck({kind:"startsWith",value,...errorUtil.errToObj(message)})}endsWith(value,message){return this._addCheck({kind:"endsWith",value,...errorUtil.errToObj(message)})}min(minLength,message){return this._addCheck({kind:"min",value:minLength,...errorUtil.errToObj(message)})}max(maxLength,message){return this._addCheck({kind:"max",value:maxLength,...errorUtil.errToObj(message)})}length(len,message){return this._addCheck({kind:"length",value:len,...errorUtil.errToObj(message)})}nonempty(message){return this.min(1,errorUtil.errToObj(message))}trim(){return new ZodString({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ZodString({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ZodString({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((ch=>ch.kind==="datetime"))}get isEmail(){return!!this._def.checks.find((ch=>ch.kind==="email"))}get isURL(){return!!this._def.checks.find((ch=>ch.kind==="url"))}get isEmoji(){return!!this._def.checks.find((ch=>ch.kind==="emoji"))}get isUUID(){return!!this._def.checks.find((ch=>ch.kind==="uuid"))}get isCUID(){return!!this._def.checks.find((ch=>ch.kind==="cuid"))}get isCUID2(){return!!this._def.checks.find((ch=>ch.kind==="cuid2"))}get isULID(){return!!this._def.checks.find((ch=>ch.kind==="ulid"))}get isIP(){return!!this._def.checks.find((ch=>ch.kind==="ip"))}get minLength(){let min=null;for(const ch of this._def.checks){if(ch.kind==="min"){if(min===null||ch.value>min)min=ch.value}}return min}get maxLength(){let max=null;for(const ch of this._def.checks){if(ch.kind==="max"){if(max===null||ch.value<max)max=ch.value}}return max}}ZodString.create=params=>{var _a;return new ZodString({checks:[],typeName:ZodFirstPartyTypeKind.ZodString,coerce:(_a=params===null||params===void 0?void 0:params.coerce)!==null&&_a!==void 0?_a:false,...processCreateParams(params)})};function floatSafeRemainder(val,step){const valDecCount=(val.toString().split(".")[1]||"").length;const stepDecCount=(step.toString().split(".")[1]||"").length;const decCount=valDecCount>stepDecCount?valDecCount:stepDecCount;const valInt=parseInt(val.toFixed(decCount).replace(".",""));const stepInt=parseInt(step.toFixed(decCount).replace(".",""));return valInt%stepInt/Math.pow(10,decCount)}class ZodNumber extends ZodType{constructor(){super(...arguments);this.min=this.gte;this.max=this.lte;this.step=this.multipleOf}_parse(input){if(this._def.coerce){input.data=Number(input.data)}const parsedType=this._getType(input);if(parsedType!==ZodParsedType.number){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.number,received:ctx.parsedType});return INVALID}let ctx=undefined;const status=new ParseStatus;for(const check of this._def.checks){if(check.kind==="int"){if(!util.isInteger(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:"integer",received:"float",message:check.message});status.dirty()}}else if(check.kind==="min"){const tooSmall=check.inclusive?input.data<check.value:input.data<=check.value;if(tooSmall){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_small,minimum:check.value,type:"number",inclusive:check.inclusive,exact:false,message:check.message});status.dirty()}}else if(check.kind==="max"){const tooBig=check.inclusive?input.data>check.value:input.data>=check.value;if(tooBig){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_big,maximum:check.value,type:"number",inclusive:check.inclusive,exact:false,message:check.message});status.dirty()}}else if(check.kind==="multipleOf"){if(floatSafeRemainder(input.data,check.value)!==0){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.not_multiple_of,multipleOf:check.value,message:check.message});status.dirty()}}else if(check.kind==="finite"){if(!Number.isFinite(input.data)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.not_finite,message:check.message});status.dirty()}}else{util.assertNever(check)}}return{status:status.value,value:input.data}}gte(value,message){return this.setLimit("min",value,true,errorUtil.toString(message))}gt(value,message){return this.setLimit("min",value,false,errorUtil.toString(message))}lte(value,message){return this.setLimit("max",value,true,errorUtil.toString(message))}lt(value,message){return this.setLimit("max",value,false,errorUtil.toString(message))}setLimit(kind,value,inclusive,message){return new ZodNumber({...this._def,checks:[...this._def.checks,{kind,value,inclusive,message:errorUtil.toString(message)}]})}_addCheck(check){return new ZodNumber({...this._def,checks:[...this._def.checks,check]})}int(message){return this._addCheck({kind:"int",message:errorUtil.toString(message)})}positive(message){return this._addCheck({kind:"min",value:0,inclusive:false,message:errorUtil.toString(message)})}negative(message){return this._addCheck({kind:"max",value:0,inclusive:false,message:errorUtil.toString(message)})}nonpositive(message){return this._addCheck({kind:"max",value:0,inclusive:true,message:errorUtil.toString(message)})}nonnegative(message){return this._addCheck({kind:"min",value:0,inclusive:true,message:errorUtil.toString(message)})}multipleOf(value,message){return this._addCheck({kind:"multipleOf",value,message:errorUtil.toString(message)})}finite(message){return this._addCheck({kind:"finite",message:errorUtil.toString(message)})}safe(message){return this._addCheck({kind:"min",inclusive:true,value:Number.MIN_SAFE_INTEGER,message:errorUtil.toString(message)})._addCheck({kind:"max",inclusive:true,value:Number.MAX_SAFE_INTEGER,message:errorUtil.toString(message)})}get minValue(){let min=null;for(const ch of this._def.checks){if(ch.kind==="min"){if(min===null||ch.value>min)min=ch.value}}return min}get maxValue(){let max=null;for(const ch of this._def.checks){if(ch.kind==="max"){if(max===null||ch.value<max)max=ch.value}}return max}get isInt(){return!!this._def.checks.find((ch=>ch.kind==="int"||ch.kind==="multipleOf"&&util.isInteger(ch.value)))}get isFinite(){let max=null,min=null;for(const ch of this._def.checks){if(ch.kind==="finite"||ch.kind==="int"||ch.kind==="multipleOf"){return true}else if(ch.kind==="min"){if(min===null||ch.value>min)min=ch.value}else if(ch.kind==="max"){if(max===null||ch.value<max)max=ch.value}}return Number.isFinite(min)&&Number.isFinite(max)}}ZodNumber.create=params=>new ZodNumber({checks:[],typeName:ZodFirstPartyTypeKind.ZodNumber,coerce:(params===null||params===void 0?void 0:params.coerce)||false,...processCreateParams(params)});class ZodBigInt extends ZodType{constructor(){super(...arguments);this.min=this.gte;this.max=this.lte}_parse(input){if(this._def.coerce){input.data=BigInt(input.data)}const parsedType=this._getType(input);if(parsedType!==ZodParsedType.bigint){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.bigint,received:ctx.parsedType});return INVALID}let ctx=undefined;const status=new ParseStatus;for(const check of this._def.checks){if(check.kind==="min"){const tooSmall=check.inclusive?input.data<check.value:input.data<=check.value;if(tooSmall){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_small,type:"bigint",minimum:check.value,inclusive:check.inclusive,message:check.message});status.dirty()}}else if(check.kind==="max"){const tooBig=check.inclusive?input.data>check.value:input.data>=check.value;if(tooBig){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_big,type:"bigint",maximum:check.value,inclusive:check.inclusive,message:check.message});status.dirty()}}else if(check.kind==="multipleOf"){if(input.data%check.value!==BigInt(0)){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.not_multiple_of,multipleOf:check.value,message:check.message});status.dirty()}}else{util.assertNever(check)}}return{status:status.value,value:input.data}}gte(value,message){return this.setLimit("min",value,true,errorUtil.toString(message))}gt(value,message){return this.setLimit("min",value,false,errorUtil.toString(message))}lte(value,message){return this.setLimit("max",value,true,errorUtil.toString(message))}lt(value,message){return this.setLimit("max",value,false,errorUtil.toString(message))}setLimit(kind,value,inclusive,message){return new ZodBigInt({...this._def,checks:[...this._def.checks,{kind,value,inclusive,message:errorUtil.toString(message)}]})}_addCheck(check){return new ZodBigInt({...this._def,checks:[...this._def.checks,check]})}positive(message){return this._addCheck({kind:"min",value:BigInt(0),inclusive:false,message:errorUtil.toString(message)})}negative(message){return this._addCheck({kind:"max",value:BigInt(0),inclusive:false,message:errorUtil.toString(message)})}nonpositive(message){return this._addCheck({kind:"max",value:BigInt(0),inclusive:true,message:errorUtil.toString(message)})}nonnegative(message){return this._addCheck({kind:"min",value:BigInt(0),inclusive:true,message:errorUtil.toString(message)})}multipleOf(value,message){return this._addCheck({kind:"multipleOf",value,message:errorUtil.toString(message)})}get minValue(){let min=null;for(const ch of this._def.checks){if(ch.kind==="min"){if(min===null||ch.value>min)min=ch.value}}return min}get maxValue(){let max=null;for(const ch of this._def.checks){if(ch.kind==="max"){if(max===null||ch.value<max)max=ch.value}}return max}}ZodBigInt.create=params=>{var _a;return new ZodBigInt({checks:[],typeName:ZodFirstPartyTypeKind.ZodBigInt,coerce:(_a=params===null||params===void 0?void 0:params.coerce)!==null&&_a!==void 0?_a:false,...processCreateParams(params)})};class ZodBoolean extends ZodType{_parse(input){if(this._def.coerce){input.data=Boolean(input.data)}const parsedType=this._getType(input);if(parsedType!==ZodParsedType.boolean){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.boolean,received:ctx.parsedType});return INVALID}return OK(input.data)}}ZodBoolean.create=params=>new ZodBoolean({typeName:ZodFirstPartyTypeKind.ZodBoolean,coerce:(params===null||params===void 0?void 0:params.coerce)||false,...processCreateParams(params)});class ZodDate extends ZodType{_parse(input){if(this._def.coerce){input.data=new Date(input.data)}const parsedType=this._getType(input);if(parsedType!==ZodParsedType.date){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.date,received:ctx.parsedType});return INVALID}if(isNaN(input.data.getTime())){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_date});return INVALID}const status=new ParseStatus;let ctx=undefined;for(const check of this._def.checks){if(check.kind==="min"){if(input.data.getTime()<check.value){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_small,message:check.message,inclusive:true,exact:false,minimum:check.value,type:"date"});status.dirty()}}else if(check.kind==="max"){if(input.data.getTime()>check.value){ctx=this._getOrReturnCtx(input,ctx);addIssueToContext(ctx,{code:ZodIssueCode.too_big,message:check.message,inclusive:true,exact:false,maximum:check.value,type:"date"});status.dirty()}}else{util.assertNever(check)}}return{status:status.value,value:new Date(input.data.getTime())}}_addCheck(check){return new ZodDate({...this._def,checks:[...this._def.checks,check]})}min(minDate,message){return this._addCheck({kind:"min",value:minDate.getTime(),message:errorUtil.toString(message)})}max(maxDate,message){return this._addCheck({kind:"max",value:maxDate.getTime(),message:errorUtil.toString(message)})}get minDate(){let min=null;for(const ch of this._def.checks){if(ch.kind==="min"){if(min===null||ch.value>min)min=ch.value}}return min!=null?new Date(min):null}get maxDate(){let max=null;for(const ch of this._def.checks){if(ch.kind==="max"){if(max===null||ch.value<max)max=ch.value}}return max!=null?new Date(max):null}}ZodDate.create=params=>new ZodDate({checks:[],coerce:(params===null||params===void 0?void 0:params.coerce)||false,typeName:ZodFirstPartyTypeKind.ZodDate,...processCreateParams(params)});class ZodSymbol extends ZodType{_parse(input){const parsedType=this._getType(input);if(parsedType!==ZodParsedType.symbol){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.symbol,received:ctx.parsedType});return INVALID}return OK(input.data)}}ZodSymbol.create=params=>new ZodSymbol({typeName:ZodFirstPartyTypeKind.ZodSymbol,...processCreateParams(params)});class ZodUndefined extends ZodType{_parse(input){const parsedType=this._getType(input);if(parsedType!==ZodParsedType.undefined){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.undefined,received:ctx.parsedType});return INVALID}return OK(input.data)}}ZodUndefined.create=params=>new ZodUndefined({typeName:ZodFirstPartyTypeKind.ZodUndefined,...processCreateParams(params)});class ZodNull extends ZodType{_parse(input){const parsedType=this._getType(input);if(parsedType!==ZodParsedType.null){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.null,received:ctx.parsedType});return INVALID}return OK(input.data)}}ZodNull.create=params=>new ZodNull({typeName:ZodFirstPartyTypeKind.ZodNull,...processCreateParams(params)});class ZodAny extends ZodType{constructor(){super(...arguments);this._any=true}_parse(input){return OK(input.data)}}ZodAny.create=params=>new ZodAny({typeName:ZodFirstPartyTypeKind.ZodAny,...processCreateParams(params)});class ZodUnknown extends ZodType{constructor(){super(...arguments);this._unknown=true}_parse(input){return OK(input.data)}}ZodUnknown.create=params=>new ZodUnknown({typeName:ZodFirstPartyTypeKind.ZodUnknown,...processCreateParams(params)});class ZodNever extends ZodType{_parse(input){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.never,received:ctx.parsedType});return INVALID}}ZodNever.create=params=>new ZodNever({typeName:ZodFirstPartyTypeKind.ZodNever,...processCreateParams(params)});class ZodVoid extends ZodType{_parse(input){const parsedType=this._getType(input);if(parsedType!==ZodParsedType.undefined){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.void,received:ctx.parsedType});return INVALID}return OK(input.data)}}ZodVoid.create=params=>new ZodVoid({typeName:ZodFirstPartyTypeKind.ZodVoid,...processCreateParams(params)});class ZodArray extends ZodType{_parse(input){const{ctx,status}=this._processInputParams(input);const def=this._def;if(ctx.parsedType!==ZodParsedType.array){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.array,received:ctx.parsedType});return INVALID}if(def.exactLength!==null){const tooBig=ctx.data.length>def.exactLength.value;const tooSmall=ctx.data.length<def.exactLength.value;if(tooBig||tooSmall){addIssueToContext(ctx,{code:tooBig?ZodIssueCode.too_big:ZodIssueCode.too_small,minimum:tooSmall?def.exactLength.value:undefined,maximum:tooBig?def.exactLength.value:undefined,type:"array",inclusive:true,exact:true,message:def.exactLength.message});status.dirty()}}if(def.minLength!==null){if(ctx.data.length<def.minLength.value){addIssueToContext(ctx,{code:ZodIssueCode.too_small,minimum:def.minLength.value,type:"array",inclusive:true,exact:false,message:def.minLength.message});status.dirty()}}if(def.maxLength!==null){if(ctx.data.length>def.maxLength.value){addIssueToContext(ctx,{code:ZodIssueCode.too_big,maximum:def.maxLength.value,type:"array",inclusive:true,exact:false,message:def.maxLength.message});status.dirty()}}if(ctx.common.async){return Promise.all([...ctx.data].map(((item,i)=>def.type._parseAsync(new ParseInputLazyPath(ctx,item,ctx.path,i))))).then((result=>ParseStatus.mergeArray(status,result)))}const result=[...ctx.data].map(((item,i)=>def.type._parseSync(new ParseInputLazyPath(ctx,item,ctx.path,i))));return ParseStatus.mergeArray(status,result)}get element(){return this._def.type}min(minLength,message){return new ZodArray({...this._def,minLength:{value:minLength,message:errorUtil.toString(message)}})}max(maxLength,message){return new ZodArray({...this._def,maxLength:{value:maxLength,message:errorUtil.toString(message)}})}length(len,message){return new ZodArray({...this._def,exactLength:{value:len,message:errorUtil.toString(message)}})}nonempty(message){return this.min(1,message)}}ZodArray.create=(schema,params)=>new ZodArray({type:schema,minLength:null,maxLength:null,exactLength:null,typeName:ZodFirstPartyTypeKind.ZodArray,...processCreateParams(params)});function deepPartialify(schema){if(schema instanceof ZodObject){const newShape={};for(const key in schema.shape){const fieldSchema=schema.shape[key];newShape[key]=ZodOptional.create(deepPartialify(fieldSchema))}return new ZodObject({...schema._def,shape:()=>newShape})}else if(schema instanceof ZodArray){return new ZodArray({...schema._def,type:deepPartialify(schema.element)})}else if(schema instanceof ZodOptional){return ZodOptional.create(deepPartialify(schema.unwrap()))}else if(schema instanceof ZodNullable){return ZodNullable.create(deepPartialify(schema.unwrap()))}else if(schema instanceof ZodTuple){return ZodTuple.create(schema.items.map((item=>deepPartialify(item))))}else{return schema}}class ZodObject extends ZodType{constructor(){super(...arguments);this._cached=null;this.nonstrict=this.passthrough;this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const shape=this._def.shape();const keys=util.objectKeys(shape);return this._cached={shape,keys}}_parse(input){const parsedType=this._getType(input);if(parsedType!==ZodParsedType.object){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.object,received:ctx.parsedType});return INVALID}const{status,ctx}=this._processInputParams(input);const{shape,keys:shapeKeys}=this._getCached();const extraKeys=[];if(!(this._def.catchall instanceof ZodNever&&this._def.unknownKeys==="strip")){for(const key in ctx.data){if(!shapeKeys.includes(key)){extraKeys.push(key)}}}const pairs=[];for(const key of shapeKeys){const keyValidator=shape[key];const value=ctx.data[key];pairs.push({key:{status:"valid",value:key},value:keyValidator._parse(new ParseInputLazyPath(ctx,value,ctx.path,key)),alwaysSet:key in ctx.data})}if(this._def.catchall instanceof ZodNever){const unknownKeys=this._def.unknownKeys;if(unknownKeys==="passthrough"){for(const key of extraKeys){pairs.push({key:{status:"valid",value:key},value:{status:"valid",value:ctx.data[key]}})}}else if(unknownKeys==="strict"){if(extraKeys.length>0){addIssueToContext(ctx,{code:ZodIssueCode.unrecognized_keys,keys:extraKeys});status.dirty()}}else if(unknownKeys==="strip");else{throw new Error(`Internal ZodObject error: invalid unknownKeys value.`)}}else{const catchall=this._def.catchall;for(const key of extraKeys){const value=ctx.data[key];pairs.push({key:{status:"valid",value:key},value:catchall._parse(new ParseInputLazyPath(ctx,value,ctx.path,key)),alwaysSet:key in ctx.data})}}if(ctx.common.async){return Promise.resolve().then((async()=>{const syncPairs=[];for(const pair of pairs){const key=await pair.key;syncPairs.push({key,value:await pair.value,alwaysSet:pair.alwaysSet})}return syncPairs})).then((syncPairs=>ParseStatus.mergeObjectSync(status,syncPairs)))}else{return ParseStatus.mergeObjectSync(status,pairs)}}get shape(){return this._def.shape()}strict(message){errorUtil.errToObj;return new ZodObject({...this._def,unknownKeys:"strict",...message!==undefined?{errorMap:(issue,ctx)=>{var _a,_b,_c,_d;const defaultError=(_c=(_b=(_a=this._def).errorMap)===null||_b===void 0?void 0:_b.call(_a,issue,ctx).message)!==null&&_c!==void 0?_c:ctx.defaultError;if(issue.code==="unrecognized_keys")return{message:(_d=errorUtil.errToObj(message).message)!==null&&_d!==void 0?_d:defaultError};return{message:defaultError}}}:{}})}strip(){return new ZodObject({...this._def,unknownKeys:"strip"})}passthrough(){return new ZodObject({...this._def,unknownKeys:"passthrough"})}extend(augmentation){return new ZodObject({...this._def,shape:()=>({...this._def.shape(),...augmentation})})}merge(merging){const merged=new ZodObject({unknownKeys:merging._def.unknownKeys,catchall:merging._def.catchall,shape:()=>({...this._def.shape(),...merging._def.shape()}),typeName:ZodFirstPartyTypeKind.ZodObject});return merged}setKey(key,schema){return this.augment({[key]:schema})}catchall(index){return new ZodObject({...this._def,catchall:index})}pick(mask){const shape={};util.objectKeys(mask).forEach((key=>{if(mask[key]&&this.shape[key]){shape[key]=this.shape[key]}}));return new ZodObject({...this._def,shape:()=>shape})}omit(mask){const shape={};util.objectKeys(this.shape).forEach((key=>{if(!mask[key]){shape[key]=this.shape[key]}}));return new ZodObject({...this._def,shape:()=>shape})}deepPartial(){return deepPartialify(this)}partial(mask){const newShape={};util.objectKeys(this.shape).forEach((key=>{const fieldSchema=this.shape[key];if(mask&&!mask[key]){newShape[key]=fieldSchema}else{newShape[key]=fieldSchema.optional()}}));return new ZodObject({...this._def,shape:()=>newShape})}required(mask){const newShape={};util.objectKeys(this.shape).forEach((key=>{if(mask&&!mask[key]){newShape[key]=this.shape[key]}else{const fieldSchema=this.shape[key];let newField=fieldSchema;while(newField instanceof ZodOptional){newField=newField._def.innerType}newShape[key]=newField}}));return new ZodObject({...this._def,shape:()=>newShape})}keyof(){return createZodEnum(util.objectKeys(this.shape))}}ZodObject.create=(shape,params)=>new ZodObject({shape:()=>shape,unknownKeys:"strip",catchall:ZodNever.create(),typeName:ZodFirstPartyTypeKind.ZodObject,...processCreateParams(params)});ZodObject.strictCreate=(shape,params)=>new ZodObject({shape:()=>shape,unknownKeys:"strict",catchall:ZodNever.create(),typeName:ZodFirstPartyTypeKind.ZodObject,...processCreateParams(params)});ZodObject.lazycreate=(shape,params)=>new ZodObject({shape,unknownKeys:"strip",catchall:ZodNever.create(),typeName:ZodFirstPartyTypeKind.ZodObject,...processCreateParams(params)});class ZodUnion extends ZodType{_parse(input){const{ctx}=this._processInputParams(input);const options=this._def.options;function handleResults(results){for(const result of results){if(result.result.status==="valid"){return result.result}}for(const result of results){if(result.result.status==="dirty"){ctx.common.issues.push(...result.ctx.common.issues);return result.result}}const unionErrors=results.map((result=>new ZodError(result.ctx.common.issues)));addIssueToContext(ctx,{code:ZodIssueCode.invalid_union,unionErrors});return INVALID}if(ctx.common.async){return Promise.all(options.map((async option=>{const childCtx={...ctx,common:{...ctx.common,issues:[]},parent:null};return{result:await option._parseAsync({data:ctx.data,path:ctx.path,parent:childCtx}),ctx:childCtx}}))).then(handleResults)}else{let dirty=undefined;const issues=[];for(const option of options){const childCtx={...ctx,common:{...ctx.common,issues:[]},parent:null};const result=option._parseSync({data:ctx.data,path:ctx.path,parent:childCtx});if(result.status==="valid"){return result}else if(result.status==="dirty"&&!dirty){dirty={result,ctx:childCtx}}if(childCtx.common.issues.length){issues.push(childCtx.common.issues)}}if(dirty){ctx.common.issues.push(...dirty.ctx.common.issues);return dirty.result}const unionErrors=issues.map((issues=>new ZodError(issues)));addIssueToContext(ctx,{code:ZodIssueCode.invalid_union,unionErrors});return INVALID}}get options(){return this._def.options}}ZodUnion.create=(types,params)=>new ZodUnion({options:types,typeName:ZodFirstPartyTypeKind.ZodUnion,...processCreateParams(params)});const getDiscriminator=type=>{if(type instanceof ZodLazy){return getDiscriminator(type.schema)}else if(type instanceof ZodEffects){return getDiscriminator(type.innerType())}else if(type instanceof ZodLiteral){return[type.value]}else if(type instanceof ZodEnum){return type.options}else if(type instanceof ZodNativeEnum){return Object.keys(type.enum)}else if(type instanceof ZodDefault){return getDiscriminator(type._def.innerType)}else if(type instanceof ZodUndefined){return[undefined]}else if(type instanceof ZodNull){return[null]}else{return null}};class ZodDiscriminatedUnion extends ZodType{_parse(input){const{ctx}=this._processInputParams(input);if(ctx.parsedType!==ZodParsedType.object){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.object,received:ctx.parsedType});return INVALID}const discriminator=this.discriminator;const discriminatorValue=ctx.data[discriminator];const option=this.optionsMap.get(discriminatorValue);if(!option){addIssueToContext(ctx,{code:ZodIssueCode.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[discriminator]});return INVALID}if(ctx.common.async){return option._parseAsync({data:ctx.data,path:ctx.path,parent:ctx})}else{return option._parseSync({data:ctx.data,path:ctx.path,parent:ctx})}}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(discriminator,options,params){const optionsMap=new Map;for(const type of options){const discriminatorValues=getDiscriminator(type.shape[discriminator]);if(!discriminatorValues){throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`)}for(const value of discriminatorValues){if(optionsMap.has(value)){throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`)}optionsMap.set(value,type)}}return new ZodDiscriminatedUnion({typeName:ZodFirstPartyTypeKind.ZodDiscriminatedUnion,discriminator,options,optionsMap,...processCreateParams(params)})}}function mergeValues(a,b){const aType=getParsedType(a);const bType=getParsedType(b);if(a===b){return{valid:true,data:a}}else if(aType===ZodParsedType.object&&bType===ZodParsedType.object){const bKeys=util.objectKeys(b);const sharedKeys=util.objectKeys(a).filter((key=>bKeys.indexOf(key)!==-1));const newObj={...a,...b};for(const key of sharedKeys){const sharedValue=mergeValues(a[key],b[key]);if(!sharedValue.valid){return{valid:false}}newObj[key]=sharedValue.data}return{valid:true,data:newObj}}else if(aType===ZodParsedType.array&&bType===ZodParsedType.array){if(a.length!==b.length){return{valid:false}}const newArray=[];for(let index=0;index<a.length;index++){const itemA=a[index];const itemB=b[index];const sharedValue=mergeValues(itemA,itemB);if(!sharedValue.valid){return{valid:false}}newArray.push(sharedValue.data)}return{valid:true,data:newArray}}else if(aType===ZodParsedType.date&&bType===ZodParsedType.date&&+a===+b){return{valid:true,data:a}}else{return{valid:false}}}class ZodIntersection extends ZodType{_parse(input){const{status,ctx}=this._processInputParams(input);const handleParsed=(parsedLeft,parsedRight)=>{if(isAborted(parsedLeft)||isAborted(parsedRight)){return INVALID}const merged=mergeValues(parsedLeft.value,parsedRight.value);if(!merged.valid){addIssueToContext(ctx,{code:ZodIssueCode.invalid_intersection_types});return INVALID}if(isDirty(parsedLeft)||isDirty(parsedRight)){status.dirty()}return{status:status.value,value:merged.data}};if(ctx.common.async){return Promise.all([this._def.left._parseAsync({data:ctx.data,path:ctx.path,parent:ctx}),this._def.right._parseAsync({data:ctx.data,path:ctx.path,parent:ctx})]).then((([left,right])=>handleParsed(left,right)))}else{return handleParsed(this._def.left._parseSync({data:ctx.data,path:ctx.path,parent:ctx}),this._def.right._parseSync({data:ctx.data,path:ctx.path,parent:ctx}))}}}ZodIntersection.create=(left,right,params)=>new ZodIntersection({left,right,typeName:ZodFirstPartyTypeKind.ZodIntersection,...processCreateParams(params)});class ZodTuple extends ZodType{_parse(input){const{status,ctx}=this._processInputParams(input);if(ctx.parsedType!==ZodParsedType.array){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.array,received:ctx.parsedType});return INVALID}if(ctx.data.length<this._def.items.length){addIssueToContext(ctx,{code:ZodIssueCode.too_small,minimum:this._def.items.length,inclusive:true,exact:false,type:"array"});return INVALID}const rest=this._def.rest;if(!rest&&ctx.data.length>this._def.items.length){addIssueToContext(ctx,{code:ZodIssueCode.too_big,maximum:this._def.items.length,inclusive:true,exact:false,type:"array"});status.dirty()}const items=[...ctx.data].map(((item,itemIndex)=>{const schema=this._def.items[itemIndex]||this._def.rest;if(!schema)return null;return schema._parse(new ParseInputLazyPath(ctx,item,ctx.path,itemIndex))})).filter((x=>!!x));if(ctx.common.async){return Promise.all(items).then((results=>ParseStatus.mergeArray(status,results)))}else{return ParseStatus.mergeArray(status,items)}}get items(){return this._def.items}rest(rest){return new ZodTuple({...this._def,rest})}}ZodTuple.create=(schemas,params)=>{if(!Array.isArray(schemas)){throw new Error("You must pass an array of schemas to z.tuple([ ... ])")}return new ZodTuple({items:schemas,typeName:ZodFirstPartyTypeKind.ZodTuple,rest:null,...processCreateParams(params)})};class ZodRecord extends ZodType{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(input){const{status,ctx}=this._processInputParams(input);if(ctx.parsedType!==ZodParsedType.object){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.object,received:ctx.parsedType});return INVALID}const pairs=[];const keyType=this._def.keyType;const valueType=this._def.valueType;for(const key in ctx.data){pairs.push({key:keyType._parse(new ParseInputLazyPath(ctx,key,ctx.path,key)),value:valueType._parse(new ParseInputLazyPath(ctx,ctx.data[key],ctx.path,key))})}if(ctx.common.async){return ParseStatus.mergeObjectAsync(status,pairs)}else{return ParseStatus.mergeObjectSync(status,pairs)}}get element(){return this._def.valueType}static create(first,second,third){if(second instanceof ZodType){return new ZodRecord({keyType:first,valueType:second,typeName:ZodFirstPartyTypeKind.ZodRecord,...processCreateParams(third)})}return new ZodRecord({keyType:ZodString.create(),valueType:first,typeName:ZodFirstPartyTypeKind.ZodRecord,...processCreateParams(second)})}}class ZodMap extends ZodType{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(input){const{status,ctx}=this._processInputParams(input);if(ctx.parsedType!==ZodParsedType.map){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.map,received:ctx.parsedType});return INVALID}const keyType=this._def.keyType;const valueType=this._def.valueType;const pairs=[...ctx.data.entries()].map((([key,value],index)=>({key:keyType._parse(new ParseInputLazyPath(ctx,key,ctx.path,[index,"key"])),value:valueType._parse(new ParseInputLazyPath(ctx,value,ctx.path,[index,"value"]))})));if(ctx.common.async){const finalMap=new Map;return Promise.resolve().then((async()=>{for(const pair of pairs){const key=await pair.key;const value=await pair.value;if(key.status==="aborted"||value.status==="aborted"){return INVALID}if(key.status==="dirty"||value.status==="dirty"){status.dirty()}finalMap.set(key.value,value.value)}return{status:status.value,value:finalMap}}))}else{const finalMap=new Map;for(const pair of pairs){const key=pair.key;const value=pair.value;if(key.status==="aborted"||value.status==="aborted"){return INVALID}if(key.status==="dirty"||value.status==="dirty"){status.dirty()}finalMap.set(key.value,value.value)}return{status:status.value,value:finalMap}}}}ZodMap.create=(keyType,valueType,params)=>new ZodMap({valueType,keyType,typeName:ZodFirstPartyTypeKind.ZodMap,...processCreateParams(params)});class ZodSet extends ZodType{_parse(input){const{status,ctx}=this._processInputParams(input);if(ctx.parsedType!==ZodParsedType.set){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.set,received:ctx.parsedType});return INVALID}const def=this._def;if(def.minSize!==null){if(ctx.data.size<def.minSize.value){addIssueToContext(ctx,{code:ZodIssueCode.too_small,minimum:def.minSize.value,type:"set",inclusive:true,exact:false,message:def.minSize.message});status.dirty()}}if(def.maxSize!==null){if(ctx.data.size>def.maxSize.value){addIssueToContext(ctx,{code:ZodIssueCode.too_big,maximum:def.maxSize.value,type:"set",inclusive:true,exact:false,message:def.maxSize.message});status.dirty()}}const valueType=this._def.valueType;function finalizeSet(elements){const parsedSet=new Set;for(const element of elements){if(element.status==="aborted")return INVALID;if(element.status==="dirty")status.dirty();parsedSet.add(element.value)}return{status:status.value,value:parsedSet}}const elements=[...ctx.data.values()].map(((item,i)=>valueType._parse(new ParseInputLazyPath(ctx,item,ctx.path,i))));if(ctx.common.async){return Promise.all(elements).then((elements=>finalizeSet(elements)))}else{return finalizeSet(elements)}}min(minSize,message){return new ZodSet({...this._def,minSize:{value:minSize,message:errorUtil.toString(message)}})}max(maxSize,message){return new ZodSet({...this._def,maxSize:{value:maxSize,message:errorUtil.toString(message)}})}size(size,message){return this.min(size,message).max(size,message)}nonempty(message){return this.min(1,message)}}ZodSet.create=(valueType,params)=>new ZodSet({valueType,minSize:null,maxSize:null,typeName:ZodFirstPartyTypeKind.ZodSet,...processCreateParams(params)});class ZodFunction extends ZodType{constructor(){super(...arguments);this.validate=this.implement}_parse(input){const{ctx}=this._processInputParams(input);if(ctx.parsedType!==ZodParsedType.function){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.function,received:ctx.parsedType});return INVALID}function makeArgsIssue(args,error){return makeIssue({data:args,path:ctx.path,errorMaps:[ctx.common.contextualErrorMap,ctx.schemaErrorMap,getErrorMap(),errorMap].filter((x=>!!x)),issueData:{code:ZodIssueCode.invalid_arguments,argumentsError:error}})}function makeReturnsIssue(returns,error){return makeIssue({data:returns,path:ctx.path,errorMaps:[ctx.common.contextualErrorMap,ctx.schemaErrorMap,getErrorMap(),errorMap].filter((x=>!!x)),issueData:{code:ZodIssueCode.invalid_return_type,returnTypeError:error}})}const params={errorMap:ctx.common.contextualErrorMap};const fn=ctx.data;if(this._def.returns instanceof ZodPromise){const me=this;return OK((async function(...args){const error=new ZodError([]);const parsedArgs=await me._def.args.parseAsync(args,params).catch((e=>{error.addIssue(makeArgsIssue(args,e));throw error}));const result=await Reflect.apply(fn,this,parsedArgs);const parsedReturns=await me._def.returns._def.type.parseAsync(result,params).catch((e=>{error.addIssue(makeReturnsIssue(result,e));throw error}));return parsedReturns}))}else{const me=this;return OK((function(...args){const parsedArgs=me._def.args.safeParse(args,params);if(!parsedArgs.success){throw new ZodError([makeArgsIssue(args,parsedArgs.error)])}const result=Reflect.apply(fn,this,parsedArgs.data);const parsedReturns=me._def.returns.safeParse(result,params);if(!parsedReturns.success){throw new ZodError([makeReturnsIssue(result,parsedReturns.error)])}return parsedReturns.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...items){return new ZodFunction({...this._def,args:ZodTuple.create(items).rest(ZodUnknown.create())})}returns(returnType){return new ZodFunction({...this._def,returns:returnType})}implement(func){const validatedFunc=this.parse(func);return validatedFunc}strictImplement(func){const validatedFunc=this.parse(func);return validatedFunc}static create(args,returns,params){return new ZodFunction({args:args?args:ZodTuple.create([]).rest(ZodUnknown.create()),returns:returns||ZodUnknown.create(),typeName:ZodFirstPartyTypeKind.ZodFunction,...processCreateParams(params)})}}class ZodLazy extends ZodType{get schema(){return this._def.getter()}_parse(input){const{ctx}=this._processInputParams(input);const lazySchema=this._def.getter();return lazySchema._parse({data:ctx.data,path:ctx.path,parent:ctx})}}ZodLazy.create=(getter,params)=>new ZodLazy({getter,typeName:ZodFirstPartyTypeKind.ZodLazy,...processCreateParams(params)});class ZodLiteral extends ZodType{_parse(input){if(input.data!==this._def.value){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{received:ctx.data,code:ZodIssueCode.invalid_literal,expected:this._def.value});return INVALID}return{status:"valid",value:input.data}}get value(){return this._def.value}}ZodLiteral.create=(value,params)=>new ZodLiteral({value,typeName:ZodFirstPartyTypeKind.ZodLiteral,...processCreateParams(params)});function createZodEnum(values,params){return new ZodEnum({values,typeName:ZodFirstPartyTypeKind.ZodEnum,...processCreateParams(params)})}class ZodEnum extends ZodType{_parse(input){if(typeof input.data!=="string"){const ctx=this._getOrReturnCtx(input);const expectedValues=this._def.values;addIssueToContext(ctx,{expected:util.joinValues(expectedValues),received:ctx.parsedType,code:ZodIssueCode.invalid_type});return INVALID}if(this._def.values.indexOf(input.data)===-1){const ctx=this._getOrReturnCtx(input);const expectedValues=this._def.values;addIssueToContext(ctx,{received:ctx.data,code:ZodIssueCode.invalid_enum_value,options:expectedValues});return INVALID}return OK(input.data)}get options(){return this._def.values}get enum(){const enumValues={};for(const val of this._def.values){enumValues[val]=val}return enumValues}get Values(){const enumValues={};for(const val of this._def.values){enumValues[val]=val}return enumValues}get Enum(){const enumValues={};for(const val of this._def.values){enumValues[val]=val}return enumValues}extract(values){return ZodEnum.create(values)}exclude(values){return ZodEnum.create(this.options.filter((opt=>!values.includes(opt))))}}ZodEnum.create=createZodEnum;class ZodNativeEnum extends ZodType{_parse(input){const nativeEnumValues=util.getValidEnumValues(this._def.values);const ctx=this._getOrReturnCtx(input);if(ctx.parsedType!==ZodParsedType.string&&ctx.parsedType!==ZodParsedType.number){const expectedValues=util.objectValues(nativeEnumValues);addIssueToContext(ctx,{expected:util.joinValues(expectedValues),received:ctx.parsedType,code:ZodIssueCode.invalid_type});return INVALID}if(nativeEnumValues.indexOf(input.data)===-1){const expectedValues=util.objectValues(nativeEnumValues);addIssueToContext(ctx,{received:ctx.data,code:ZodIssueCode.invalid_enum_value,options:expectedValues});return INVALID}return OK(input.data)}get enum(){return this._def.values}}ZodNativeEnum.create=(values,params)=>new ZodNativeEnum({values,typeName:ZodFirstPartyTypeKind.ZodNativeEnum,...processCreateParams(params)});class ZodPromise extends ZodType{unwrap(){return this._def.type}_parse(input){const{ctx}=this._processInputParams(input);if(ctx.parsedType!==ZodParsedType.promise&&ctx.common.async===false){addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.promise,received:ctx.parsedType});return INVALID}const promisified=ctx.parsedType===ZodParsedType.promise?ctx.data:Promise.resolve(ctx.data);return OK(promisified.then((data=>this._def.type.parseAsync(data,{path:ctx.path,errorMap:ctx.common.contextualErrorMap}))))}}ZodPromise.create=(schema,params)=>new ZodPromise({type:schema,typeName:ZodFirstPartyTypeKind.ZodPromise,...processCreateParams(params)});class ZodEffects extends ZodType{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ZodFirstPartyTypeKind.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(input){const{status,ctx}=this._processInputParams(input);const effect=this._def.effect||null;const checkCtx={addIssue:arg=>{addIssueToContext(ctx,arg);if(arg.fatal){status.abort()}else{status.dirty()}},get path(){return ctx.path}};checkCtx.addIssue=checkCtx.addIssue.bind(checkCtx);if(effect.type==="preprocess"){const processed=effect.transform(ctx.data,checkCtx);if(ctx.common.issues.length){return{status:"dirty",value:ctx.data}}if(ctx.common.async){return Promise.resolve(processed).then((processed=>this._def.schema._parseAsync({data:processed,path:ctx.path,parent:ctx})))}else{return this._def.schema._parseSync({data:processed,path:ctx.path,parent:ctx})}}if(effect.type==="refinement"){const executeRefinement=acc=>{const result=effect.refinement(acc,checkCtx);if(ctx.common.async){return Promise.resolve(result)}if(result instanceof Promise){throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.")}return acc};if(ctx.common.async===false){const inner=this._def.schema._parseSync({data:ctx.data,path:ctx.path,parent:ctx});if(inner.status==="aborted")return INVALID;if(inner.status==="dirty")status.dirty();executeRefinement(inner.value);return{status:status.value,value:inner.value}}else{return this._def.schema._parseAsync({data:ctx.data,path:ctx.path,parent:ctx}).then((inner=>{if(inner.status==="aborted")return INVALID;if(inner.status==="dirty")status.dirty();return executeRefinement(inner.value).then((()=>({status:status.value,value:inner.value})))}))}}if(effect.type==="transform"){if(ctx.common.async===false){const base=this._def.schema._parseSync({data:ctx.data,path:ctx.path,parent:ctx});if(!isValid(base))return base;const result=effect.transform(base.value,checkCtx);if(result instanceof Promise){throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`)}return{status:status.value,value:result}}else{return this._def.schema._parseAsync({data:ctx.data,path:ctx.path,parent:ctx}).then((base=>{if(!isValid(base))return base;return Promise.resolve(effect.transform(base.value,checkCtx)).then((result=>({status:status.value,value:result})))}))}}util.assertNever(effect)}}ZodEffects.create=(schema,effect,params)=>new ZodEffects({schema,typeName:ZodFirstPartyTypeKind.ZodEffects,effect,...processCreateParams(params)});ZodEffects.createWithPreprocess=(preprocess,schema,params)=>new ZodEffects({schema,effect:{type:"preprocess",transform:preprocess},typeName:ZodFirstPartyTypeKind.ZodEffects,...processCreateParams(params)});class ZodOptional extends ZodType{_parse(input){const parsedType=this._getType(input);if(parsedType===ZodParsedType.undefined){return OK(undefined)}return this._def.innerType._parse(input)}unwrap(){return this._def.innerType}}ZodOptional.create=(type,params)=>new ZodOptional({innerType:type,typeName:ZodFirstPartyTypeKind.ZodOptional,...processCreateParams(params)});class ZodNullable extends ZodType{_parse(input){const parsedType=this._getType(input);if(parsedType===ZodParsedType.null){return OK(null)}return this._def.innerType._parse(input)}unwrap(){return this._def.innerType}}ZodNullable.create=(type,params)=>new ZodNullable({innerType:type,typeName:ZodFirstPartyTypeKind.ZodNullable,...processCreateParams(params)});class ZodDefault extends ZodType{_parse(input){const{ctx}=this._processInputParams(input);let data=ctx.data;if(ctx.parsedType===ZodParsedType.undefined){data=this._def.defaultValue()}return this._def.innerType._parse({data,path:ctx.path,parent:ctx})}removeDefault(){return this._def.innerType}}ZodDefault.create=(type,params)=>new ZodDefault({innerType:type,typeName:ZodFirstPartyTypeKind.ZodDefault,defaultValue:typeof params.default==="function"?params.default:()=>params.default,...processCreateParams(params)});class ZodCatch extends ZodType{_parse(input){const{ctx}=this._processInputParams(input);const newCtx={...ctx,common:{...ctx.common,issues:[]}};const result=this._def.innerType._parse({data:newCtx.data,path:newCtx.path,parent:{...newCtx}});if(isAsync(result)){return result.then((result=>({status:"valid",value:result.status==="valid"?result.value:this._def.catchValue({get error(){return new ZodError(newCtx.common.issues)},input:newCtx.data})})))}else{return{status:"valid",value:result.status==="valid"?result.value:this._def.catchValue({get error(){return new ZodError(newCtx.common.issues)},input:newCtx.data})}}}removeCatch(){return this._def.innerType}}ZodCatch.create=(type,params)=>new ZodCatch({innerType:type,typeName:ZodFirstPartyTypeKind.ZodCatch,catchValue:typeof params.catch==="function"?params.catch:()=>params.catch,...processCreateParams(params)});class ZodNaN extends ZodType{_parse(input){const parsedType=this._getType(input);if(parsedType!==ZodParsedType.nan){const ctx=this._getOrReturnCtx(input);addIssueToContext(ctx,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.nan,received:ctx.parsedType});return INVALID}return{status:"valid",value:input.data}}}ZodNaN.create=params=>new ZodNaN({typeName:ZodFirstPartyTypeKind.ZodNaN,...processCreateParams(params)});const BRAND=Symbol("zod_brand");class ZodBranded extends ZodType{_parse(input){const{ctx}=this._processInputParams(input);const data=ctx.data;return this._def.type._parse({data,path:ctx.path,parent:ctx})}unwrap(){return this._def.type}}class ZodPipeline extends ZodType{_parse(input){const{status,ctx}=this._processInputParams(input);if(ctx.common.async){const handleAsync=async()=>{const inResult=await this._def.in._parseAsync({data:ctx.data,path:ctx.path,parent:ctx});if(inResult.status==="aborted")return INVALID;if(inResult.status==="dirty"){status.dirty();return DIRTY(inResult.value)}else{return this._def.out._parseAsync({data:inResult.value,path:ctx.path,parent:ctx})}};return handleAsync()}else{const inResult=this._def.in._parseSync({data:ctx.data,path:ctx.path,parent:ctx});if(inResult.status==="aborted")return INVALID;if(inResult.status==="dirty"){status.dirty();return{status:"dirty",value:inResult.value}}else{return this._def.out._parseSync({data:inResult.value,path:ctx.path,parent:ctx})}}}static create(a,b){return new ZodPipeline({in:a,out:b,typeName:ZodFirstPartyTypeKind.ZodPipeline})}}class ZodReadonly extends ZodType{_parse(input){const result=this._def.innerType._parse(input);if(isValid(result)){result.value=Object.freeze(result.value)}return result}}ZodReadonly.create=(type,params)=>new ZodReadonly({innerType:type,typeName:ZodFirstPartyTypeKind.ZodReadonly,...processCreateParams(params)});const custom=(check,params={},fatal)=>{if(check)return ZodAny.create().superRefine(((data,ctx)=>{var _a,_b;if(!check(data)){const p=typeof params==="function"?params(data):typeof params==="string"?{message:params}:params;const _fatal=(_b=(_a=p.fatal)!==null&&_a!==void 0?_a:fatal)!==null&&_b!==void 0?_b:true;const p2=typeof p==="string"?{message:p}:p;ctx.addIssue({code:"custom",...p2,fatal:_fatal})}}));return ZodAny.create()};const late={object:ZodObject.lazycreate};var ZodFirstPartyTypeKind;(function(ZodFirstPartyTypeKind){ZodFirstPartyTypeKind["ZodString"]="ZodString";ZodFirstPartyTypeKind["ZodNumber"]="ZodNumber";ZodFirstPartyTypeKind["ZodNaN"]="ZodNaN";ZodFirstPartyTypeKind["ZodBigInt"]="ZodBigInt";ZodFirstPartyTypeKind["ZodBoolean"]="ZodBoolean";ZodFirstPartyTypeKind["ZodDate"]="ZodDate";ZodFirstPartyTypeKind["ZodSymbol"]="ZodSymbol";ZodFirstPartyTypeKind["ZodUndefined"]="ZodUndefined";ZodFirstPartyTypeKind["ZodNull"]="ZodNull";ZodFirstPartyTypeKind["ZodAny"]="ZodAny";ZodFirstPartyTypeKind["ZodUnknown"]="ZodUnknown";ZodFirstPartyTypeKind["ZodNever"]="ZodNever";ZodFirstPartyTypeKind["ZodVoid"]="ZodVoid";ZodFirstPartyTypeKind["ZodArray"]="ZodArray";ZodFirstPartyTypeKind["ZodObject"]="ZodObject";ZodFirstPartyTypeKind["ZodUnion"]="ZodUnion";ZodFirstPartyTypeKind["ZodDiscriminatedUnion"]="ZodDiscriminatedUnion";ZodFirstPartyTypeKind["ZodIntersection"]="ZodIntersection";ZodFirstPartyTypeKind["ZodTuple"]="ZodTuple";ZodFirstPartyTypeKind["ZodRecord"]="ZodRecord";ZodFirstPartyTypeKind["ZodMap"]="ZodMap";ZodFirstPartyTypeKind["ZodSet"]="ZodSet";ZodFirstPartyTypeKind["ZodFunction"]="ZodFunction";ZodFirstPartyTypeKind["ZodLazy"]="ZodLazy";ZodFirstPartyTypeKind["ZodLiteral"]="ZodLiteral";ZodFirstPartyTypeKind["ZodEnum"]="ZodEnum";ZodFirstPartyTypeKind["ZodEffects"]="ZodEffects";ZodFirstPartyTypeKind["ZodNativeEnum"]="ZodNativeEnum";ZodFirstPartyTypeKind["ZodOptional"]="ZodOptional";ZodFirstPartyTypeKind["ZodNullable"]="ZodNullable";ZodFirstPartyTypeKind["ZodDefault"]="ZodDefault";ZodFirstPartyTypeKind["ZodCatch"]="ZodCatch";ZodFirstPartyTypeKind["ZodPromise"]="ZodPromise";ZodFirstPartyTypeKind["ZodBranded"]="ZodBranded";ZodFirstPartyTypeKind["ZodPipeline"]="ZodPipeline";ZodFirstPartyTypeKind["ZodReadonly"]="ZodReadonly"})(ZodFirstPartyTypeKind||(ZodFirstPartyTypeKind={}));const instanceOfType=(cls,params={message:`Input not instance of ${cls.name}`})=>custom((data=>data instanceof cls),params);const stringType=ZodString.create;const numberType=ZodNumber.create;const nanType=ZodNaN.create;const bigIntType=ZodBigInt.create;const booleanType=ZodBoolean.create;const dateType=ZodDate.create;const symbolType=ZodSymbol.create;const undefinedType=ZodUndefined.create;const nullType=ZodNull.create;const anyType=ZodAny.create;const unknownType=ZodUnknown.create;const neverType=ZodNever.create;const voidType=ZodVoid.create;const arrayType=ZodArray.create;const objectType=ZodObject.create;const strictObjectType=ZodObject.strictCreate;const unionType=ZodUnion.create;const discriminatedUnionType=ZodDiscriminatedUnion.create;const intersectionType=ZodIntersection.create;const tupleType=ZodTuple.create;const recordType=ZodRecord.create;const mapType=ZodMap.create;const setType=ZodSet.create;const functionType=ZodFunction.create;const lazyType=ZodLazy.create;const literalType=ZodLiteral.create;const enumType=ZodEnum.create;const nativeEnumType=ZodNativeEnum.create;const promiseType=ZodPromise.create;const effectsType=ZodEffects.create;const optionalType=ZodOptional.create;const nullableType=ZodNullable.create;const preprocessType=ZodEffects.createWithPreprocess;const pipelineType=ZodPipeline.create;const ostring=()=>stringType().optional();const onumber=()=>numberType().optional();const oboolean=()=>booleanType().optional();const coerce={string:arg=>ZodString.create({...arg,coerce:true}),number:arg=>ZodNumber.create({...arg,coerce:true}),boolean:arg=>ZodBoolean.create({...arg,coerce:true}),bigint:arg=>ZodBigInt.create({...arg,coerce:true}),date:arg=>ZodDate.create({...arg,coerce:true})};const NEVER=INVALID;var z=Object.freeze({__proto__:null,defaultErrorMap:errorMap,setErrorMap,getErrorMap,makeIssue,EMPTY_PATH,addIssueToContext,ParseStatus,INVALID,DIRTY,OK,isAborted,isDirty,isValid,isAsync,get util(){return util},get objectUtil(){return objectUtil},ZodParsedType,getParsedType,ZodType,ZodString,ZodNumber,ZodBigInt,ZodBoolean,ZodDate,ZodSymbol,ZodUndefined,ZodNull,ZodAny,ZodUnknown,ZodNever,ZodVoid,ZodArray,ZodObject,ZodUnion,ZodDiscriminatedUnion,ZodIntersection,ZodTuple,ZodRecord,ZodMap,ZodSet,ZodFunction,ZodLazy,ZodLiteral,ZodEnum,ZodNativeEnum,ZodPromise,ZodEffects,ZodTransformer:ZodEffects,ZodOptional,ZodNullable,ZodDefault,ZodCatch,ZodNaN,BRAND,ZodBranded,ZodPipeline,ZodReadonly,custom,Schema:ZodType,ZodSchema:ZodType,late,get ZodFirstPartyTypeKind(){return ZodFirstPartyTypeKind},coerce,any:anyType,array:arrayType,bigint:bigIntType,boolean:booleanType,date:dateType,discriminatedUnion:discriminatedUnionType,effect:effectsType,enum:enumType,function:functionType,instanceof:instanceOfType,intersection:intersectionType,lazy:lazyType,literal:literalType,map:mapType,nan:nanType,nativeEnum:nativeEnumType,never:neverType,null:nullType,nullable:nullableType,number:numberType,object:objectType,oboolean,onumber,optional:optionalType,ostring,pipeline:pipelineType,preprocess:preprocessType,promise:promiseType,record:recordType,set:setType,strictObject:strictObjectType,string:stringType,symbol:symbolType,transformer:effectsType,tuple:tupleType,undefined:undefinedType,union:unionType,unknown:unknownType,void:voidType,NEVER,ZodIssueCode,quotelessJson,ZodError});const zError=z.object({message:z.string()});function zType(key){return z.literal(W3mFrameConstants_W3mFrameConstants[key])}const GetTransactionByHashResponse=z.object({accessList:z.array(z.string()),blockHash:z.string().nullable(),blockNumber:z.string().nullable(),chainId:z.string(),from:z.string(),gas:z.string(),hash:z.string(),input:z.string().nullable(),maxFeePerGas:z.string(),maxPriorityFeePerGas:z.string(),nonce:z.string(),r:z.string(),s:z.string(),to:z.string(),transactionIndex:z.string().nullable(),type:z.string(),v:z.string(),value:z.string()});const AppSwitchNetworkRequest=z.object({chainId:z.number()});const AppConnectEmailRequest=z.object({email:z.string().email()});const AppConnectOtpRequest=z.object({otp:z.string()});const AppGetUserRequest=z.object({chainId:z.optional(z.number())});const AppUpdateEmailRequest=z.object({email:z.string().email()});const AppUpdateEmailPrimaryOtpRequest=z.object({otp:z.string()});const AppUpdateEmailSecondaryOtpRequest=z.object({otp:z.string()});const AppSyncThemeRequest=z.object({themeMode:z.optional(z["enum"](["light","dark"])),themeVariables:z.optional(z.record(z.string(),z.string().or(z.number())))});const AppSyncDappDataRequest=z.object({metadata:z.object({name:z.string(),description:z.string(),url:z.string(),icons:z.array(z.string())}).optional(),sdkVersion:z.string(),projectId:z.string()});const FrameConnectEmailResponse=z.object({action:z["enum"](["VERIFY_DEVICE","VERIFY_OTP"])});const FrameGetUserResponse=z.object({email:z.string().email(),address:z.string(),chainId:z.number()});const FrameIsConnectedResponse=z.object({isConnected:z.boolean()});const FrameGetChainIdResponse=z.object({chainId:z.number()});const FrameSwitchNetworkResponse=z.object({chainId:z.number()});const FrameUpdateEmailSecondaryOtpResolver=z.object({newEmail:z.string().email()});const RpcResponse=z.any();const RpcPersonalSignRequest=z.object({method:z.literal("personal_sign"),params:z.array(z.any())});const RpcEthSendTransactionRequest=z.object({method:z.literal("eth_sendTransaction"),params:z.array(z.any())});const RpcEthAccountsRequest=z.object({method:z.literal("eth_accounts")});const RpcGetBalance=z.object({method:z.literal("eth_getBalance"),params:z.array(z.any())});const RpcEthEstimateGas=z.object({method:z.literal("eth_estimateGas"),params:z.array(z.any())});const RpcEthGasPrice=z.object({method:z.literal("eth_gasPrice")});const RpcEthSignTypedDataV4=z.object({method:z.literal("eth_signTypedData_v4"),params:z.array(z.any())});const RpcEthGetTransactionByHash=z.object({method:z.literal("eth_getTransactionByHash"),params:z.array(z.any())});const RpcEthBlockNumber=z.object({method:z.literal("eth_blockNumber")});const RpcEthChainId=z.object({method:z.literal("eth_chainId")});const FrameSession=z.object({token:z.string()});const W3mFrameSchema_W3mFrameSchema={appEvent:z.object({type:zType("APP_SWITCH_NETWORK"),payload:AppSwitchNetworkRequest}).or(z.object({type:zType("APP_CONNECT_EMAIL"),payload:AppConnectEmailRequest})).or(z.object({type:zType("APP_CONNECT_DEVICE")})).or(z.object({type:zType("APP_CONNECT_OTP"),payload:AppConnectOtpRequest})).or(z.object({type:zType("APP_GET_USER"),payload:z.optional(AppGetUserRequest)})).or(z.object({type:zType("APP_SIGN_OUT")})).or(z.object({type:zType("APP_IS_CONNECTED"),payload:z.optional(FrameSession)})).or(z.object({type:zType("APP_GET_CHAIN_ID")})).or(z.object({type:zType("APP_RPC_REQUEST"),payload:RpcPersonalSignRequest.or(RpcEthSendTransactionRequest).or(RpcEthAccountsRequest).or(RpcGetBalance).or(RpcEthEstimateGas).or(RpcEthGasPrice).or(RpcEthSignTypedDataV4).or(RpcEthBlockNumber).or(RpcEthChainId).or(RpcEthGetTransactionByHash)})).or(z.object({type:zType("APP_UPDATE_EMAIL"),payload:AppUpdateEmailRequest})).or(z.object({type:zType("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:AppUpdateEmailPrimaryOtpRequest})).or(z.object({type:zType("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:AppUpdateEmailSecondaryOtpRequest})).or(z.object({type:zType("APP_SYNC_THEME"),payload:AppSyncThemeRequest})).or(z.object({type:zType("APP_SYNC_DAPP_DATA"),payload:AppSyncDappDataRequest})),frameEvent:z.object({type:zType("FRAME_SWITCH_NETWORK_ERROR"),payload:zError}).or(z.object({type:zType("FRAME_SWITCH_NETWORK_SUCCESS"),payload:FrameSwitchNetworkResponse})).or(z.object({type:zType("FRAME_CONNECT_EMAIL_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_CONNECT_EMAIL_SUCCESS"),payload:FrameConnectEmailResponse})).or(z.object({type:zType("FRAME_CONNECT_OTP_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_CONNECT_OTP_SUCCESS")})).or(z.object({type:zType("FRAME_CONNECT_DEVICE_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_CONNECT_DEVICE_SUCCESS")})).or(z.object({type:zType("FRAME_GET_USER_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_GET_USER_SUCCESS"),payload:FrameGetUserResponse})).or(z.object({type:zType("FRAME_SIGN_OUT_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_SIGN_OUT_SUCCESS")})).or(z.object({type:zType("FRAME_IS_CONNECTED_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_IS_CONNECTED_SUCCESS"),payload:FrameIsConnectedResponse})).or(z.object({type:zType("FRAME_GET_CHAIN_ID_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_GET_CHAIN_ID_SUCCESS"),payload:FrameGetChainIdResponse})).or(z.object({type:zType("FRAME_RPC_REQUEST_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_RPC_REQUEST_SUCCESS"),payload:RpcResponse})).or(z.object({type:zType("FRAME_SESSION_UPDATE"),payload:FrameSession})).or(z.object({type:zType("FRAME_UPDATE_EMAIL_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_UPDATE_EMAIL_SUCCESS")})).or(z.object({type:zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(z.object({type:zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:FrameUpdateEmailSecondaryOtpResolver})).or(z.object({type:zType("FRAME_SYNC_THEME_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_SYNC_THEME_SUCCESS")})).or(z.object({type:zType("FRAME_SYNC_DAPP_DATA_ERROR"),payload:zError})).or(z.object({type:zType("FRAME_SYNC_DAPP_DATA_SUCCESS")}))};const W3mFrameStorage_W3mFrameStorage={set(key,value){if(W3mFrameHelpers_W3mFrameHelpers.isClient){localStorage.setItem(`${W3mFrameConstants_W3mFrameConstants.STORAGE_KEY}${key}`,value)}},get(key){if(W3mFrameHelpers_W3mFrameHelpers.isClient){return localStorage.getItem(`${W3mFrameConstants_W3mFrameConstants.STORAGE_KEY}${key}`)}return null},delete(key){if(W3mFrameHelpers_W3mFrameHelpers.isClient){localStorage.removeItem(`${W3mFrameConstants_W3mFrameConstants.STORAGE_KEY}${key}`)}}};const RESTRICTED_TIMEZONES=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"];const EMAIL_MINIMUM_TIMEOUT=30*1e3;const W3mFrameHelpers_W3mFrameHelpers={getBlockchainApiUrl(){try{const{timeZone}=(new Intl.DateTimeFormat).resolvedOptions();const capTimeZone=timeZone.toUpperCase();return RESTRICTED_TIMEZONES.includes(capTimeZone)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return false}},checkIfAllowedToTriggerEmail(){const lastEmailLoginTime=W3mFrameStorage_W3mFrameStorage.get(W3mFrameConstants_W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);if(lastEmailLoginTime){const difference=Date.now()-Number(lastEmailLoginTime);if(difference<EMAIL_MINIMUM_TIMEOUT){const cooldownSec=Math.ceil((EMAIL_MINIMUM_TIMEOUT-difference)/1e3);throw new Error(`Please try again after ${cooldownSec} seconds`)}}},getTimeToNextEmailLogin(){const lastEmailLoginTime=W3mFrameStorage_W3mFrameStorage.get(W3mFrameConstants_W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);if(lastEmailLoginTime){const difference=Date.now()-Number(lastEmailLoginTime);if(difference<EMAIL_MINIMUM_TIMEOUT){return Math.ceil((EMAIL_MINIMUM_TIMEOUT-difference)/1e3)}}return 0},checkIfRequestIsAllowed(request){const method=request?.payload?.method;return W3mFrameConstants_W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(method)},isClient:typeof window!=="undefined"};class W3mFrame_W3mFrame{constructor(projectId,isAppClient=false){this.iframe=null;this.rpcUrl=W3mFrameHelpers.getBlockchainApiUrl();this.events={onFrameEvent:callback=>{if(W3mFrameHelpers.isClient){window.addEventListener("message",(({data})=>{if(!data.type?.includes(W3mFrameConstants.FRAME_EVENT_KEY)){return}const frameEvent=W3mFrameSchema.frameEvent.parse(data);callback(frameEvent)}))}},onAppEvent:callback=>{if(W3mFrameHelpers.isClient){window.addEventListener("message",(({data})=>{if(!data.type?.includes(W3mFrameConstants.APP_EVENT_KEY)){return}const appEvent=W3mFrameSchema.appEvent.parse(data);callback(appEvent)}))}},postAppEvent:event=>{if(W3mFrameHelpers.isClient){if(!this.iframe?.contentWindow){throw new Error("W3mFrame: iframe is not set")}W3mFrameSchema.appEvent.parse(event);window.postMessage(event);this.iframe.contentWindow.postMessage(event,"*")}},postFrameEvent:event=>{if(W3mFrameHelpers.isClient){if(!parent){throw new Error("W3mFrame: parent is not set")}W3mFrameSchema.frameEvent.parse(event);parent.postMessage(event,"*")}}};this.projectId=projectId;this.frameLoadPromise=new Promise(((resolve,reject)=>{this.frameLoadPromiseResolver={resolve,reject}}));if(isAppClient){this.frameLoadPromise=new Promise(((resolve,reject)=>{this.frameLoadPromiseResolver={resolve,reject}}));if(W3mFrameHelpers.isClient){const iframe=document.createElement("iframe");iframe.id="w3m-iframe";iframe.src=`${W3mFrameConstants.SECURE_SITE_SDK}?projectId=${projectId}`;iframe.style.position="fixed";iframe.style.zIndex="999999";iframe.style.display="none";iframe.style.opacity="0";iframe.style.borderRadius=`clamp(0px, var(--wui-border-radius-l), 44px)`;document.body.appendChild(iframe);this.iframe=iframe;this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(undefined)};this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}}get networks(){const data=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map((id=>({[id]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${id}&projectId=${this.projectId}`,chainId:id}})));return Object.assign({},...data)}}class W3mFrameProvider{constructor(projectId){this.connectEmailResolver=undefined;this.connectDeviceResolver=undefined;this.connectOtpResolver=undefined;this.connectResolver=undefined;this.disconnectResolver=undefined;this.isConnectedResolver=undefined;this.getChainIdResolver=undefined;this.switchChainResolver=undefined;this.rpcRequestResolver=undefined;this.updateEmailResolver=undefined;this.updateEmailPrimaryOtpResolver=undefined;this.updateEmailSecondaryOtpResolver=undefined;this.syncThemeResolver=undefined;this.syncDappDataResolver=undefined;this.w3mFrame=new W3mFrame(projectId,true);this.w3mFrame.events.onFrameEvent((event=>{console.log("💻 received",event);switch(event.type){case W3mFrameConstants.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(event);case W3mFrameConstants.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(event);case W3mFrameConstants.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case W3mFrameConstants.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(event);case W3mFrameConstants.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case W3mFrameConstants.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(event);case W3mFrameConstants.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(event);case W3mFrameConstants.FRAME_GET_USER_ERROR:return this.onConnectError(event);case W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(event);case W3mFrameConstants.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(event);case W3mFrameConstants.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(event);case W3mFrameConstants.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(event);case W3mFrameConstants.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case W3mFrameConstants.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(event);case W3mFrameConstants.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(event);case W3mFrameConstants.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(event);case W3mFrameConstants.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(event);case W3mFrameConstants.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(event);case W3mFrameConstants.FRAME_SESSION_UPDATE:return this.onSessionUpdate(event);case W3mFrameConstants.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case W3mFrameConstants.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(event);case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(event);case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(event);case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(event);case W3mFrameConstants.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case W3mFrameConstants.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(event);case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(event);default:return null}}))}getLoginEmailUsed(){return Boolean(W3mFrameStorage.get(W3mFrameConstants.EMAIL_LOGIN_USED_KEY))}getEmail(){return W3mFrameStorage.get(W3mFrameConstants.EMAIL)}async connectEmail(payload){await this.w3mFrame.frameLoadPromise;W3mFrameHelpers.checkIfAllowedToTriggerEmail();this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_CONNECT_EMAIL,payload});return new Promise(((resolve,reject)=>{this.connectEmailResolver={resolve,reject}}))}async connectDevice(){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_CONNECT_DEVICE});return new Promise(((resolve,reject)=>{this.connectDeviceResolver={resolve,reject}}))}async connectOtp(payload){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_CONNECT_OTP,payload});return new Promise(((resolve,reject)=>{this.connectOtpResolver={resolve,reject}}))}async isConnected(){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_IS_CONNECTED,payload:undefined});return new Promise(((resolve,reject)=>{this.isConnectedResolver={resolve,reject}}))}async getChainId(){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_GET_CHAIN_ID});return new Promise(((resolve,reject)=>{this.getChainIdResolver={resolve,reject}}))}async updateEmail(payload){await this.w3mFrame.frameLoadPromise;W3mFrameHelpers.checkIfAllowedToTriggerEmail();this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_UPDATE_EMAIL,payload});return new Promise(((resolve,reject)=>{this.updateEmailResolver={resolve,reject}}))}async updateEmailPrimaryOtp(payload){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_UPDATE_EMAIL_PRIMARY_OTP,payload});return new Promise(((resolve,reject)=>{this.updateEmailPrimaryOtpResolver={resolve,reject}}))}async updateEmailSecondaryOtp(payload){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_UPDATE_EMAIL_SECONDARY_OTP,payload});return new Promise(((resolve,reject)=>{this.updateEmailSecondaryOtpResolver={resolve,reject}}))}async syncTheme(payload){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_SYNC_THEME,payload});return new Promise(((resolve,reject)=>{this.syncThemeResolver={resolve,reject}}))}async syncDappData(payload){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_SYNC_DAPP_DATA,payload});return new Promise(((resolve,reject)=>{this.syncDappDataResolver={resolve,reject}}))}async connect(payload){const chainId=payload?.chainId??this.getLastUsedChainId()??1;await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_GET_USER,payload:{chainId}});return new Promise(((resolve,reject)=>{this.connectResolver={resolve,reject}}))}async switchNetwork(chainId){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_SWITCH_NETWORK,payload:{chainId}});return new Promise(((resolve,reject)=>{this.switchChainResolver={resolve,reject}}))}async disconnect(){await this.w3mFrame.frameLoadPromise;this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_SIGN_OUT});return new Promise(((resolve,reject)=>{this.disconnectResolver={resolve,reject}}))}async request(req){await this.w3mFrame.frameLoadPromise;if(W3mFrameRpcConstants.GET_CHAIN_ID===req.method){return this.getLastUsedChainId()}this.w3mFrame.events.postAppEvent({type:W3mFrameConstants.APP_RPC_REQUEST,payload:req});return new Promise(((resolve,reject)=>{this.rpcRequestResolver={resolve,reject}}))}onRpcRequest(callback){this.w3mFrame.events.onAppEvent((event=>{if(event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)){callback(event)}}))}onRpcResponse(callback){this.w3mFrame.events.onFrameEvent((event=>{if(event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)){callback(event)}}))}onIsConnected(callback){this.w3mFrame.events.onFrameEvent((event=>{if(event.type===W3mFrameConstants.FRAME_GET_USER_SUCCESS){callback()}}))}onConnectEmailSuccess(event){this.connectEmailResolver?.resolve(event.payload);this.setNewLastEmailLoginTime()}onConnectEmailError(event){this.connectEmailResolver?.reject(event.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(undefined)}onConnectDeviceError(event){this.connectDeviceResolver?.reject(event.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(undefined)}onConnectOtpError(event){this.connectOtpResolver?.reject(event.payload.message)}onConnectSuccess(event){this.setEmailLoginSuccess(event.payload.email);this.setLastUsedChainId(event.payload.chainId);this.connectResolver?.resolve(event.payload)}onConnectError(event){this.connectResolver?.reject(event.payload.message)}onIsConnectedSuccess(event){if(!event.payload.isConnected){this.deleteEmailLoginCache()}this.isConnectedResolver?.resolve(event.payload)}onIsConnectedError(event){this.isConnectedResolver?.reject(event.payload.message)}onGetChainIdSuccess(event){this.setLastUsedChainId(event.payload.chainId);this.getChainIdResolver?.resolve(event.payload)}onGetChainIdError(event){this.getChainIdResolver?.reject(event.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(undefined);this.deleteEmailLoginCache()}onSignOutError(event){this.disconnectResolver?.reject(event.payload.message)}onSwitchChainSuccess(event){this.setLastUsedChainId(event.payload.chainId);this.switchChainResolver?.resolve(event.payload)}onSwitchChainError(event){this.switchChainResolver?.reject(event.payload.message)}onRpcRequestSuccess(event){this.rpcRequestResolver?.resolve(event.payload)}onRpcRequestError(event){this.rpcRequestResolver?.reject(event.payload.message)}onSessionUpdate(event){const{payload}=event;if(payload){}}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(undefined);this.setNewLastEmailLoginTime()}onUpdateEmailError(event){this.updateEmailResolver?.reject(event.payload.message)}onUpdateEmailPrimaryOtpSuccess(){this.updateEmailPrimaryOtpResolver?.resolve(undefined)}onUpdateEmailPrimaryOtpError(event){this.updateEmailPrimaryOtpResolver?.reject(event.payload.message)}onUpdateEmailSecondaryOtpSuccess(event){const{newEmail}=event.payload;this.setEmailLoginSuccess(newEmail);this.updateEmailSecondaryOtpResolver?.resolve({newEmail})}onUpdateEmailSecondaryOtpError(event){this.updateEmailSecondaryOtpResolver?.reject(event.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(undefined)}onSyncThemeError(event){this.syncThemeResolver?.reject(event.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(undefined)}onSyncDappDataError(event){this.syncDappDataResolver?.reject(event.payload.message)}setNewLastEmailLoginTime(){W3mFrameStorage.set(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(email){W3mFrameStorage.set(W3mFrameConstants.EMAIL,email);W3mFrameStorage.set(W3mFrameConstants.EMAIL_LOGIN_USED_KEY,"true");W3mFrameStorage.delete(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){W3mFrameStorage.delete(W3mFrameConstants.EMAIL_LOGIN_USED_KEY);W3mFrameStorage.delete(W3mFrameConstants.EMAIL);W3mFrameStorage.delete(W3mFrameConstants.LAST_USED_CHAIN_KEY)}setLastUsedChainId(chainId){W3mFrameStorage.set(W3mFrameConstants.LAST_USED_CHAIN_KEY,`${chainId}`)}getLastUsedChainId(){return Number(W3mFrameStorage.get(W3mFrameConstants.LAST_USED_CHAIN_KEY))}}var w3m_email_otp_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const OTP_LENGTH=6;let W3mEmailOtpWidget=class W3mEmailOtpWidget extends lit.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super();this.loading=false;this.timeoutTimeLeft=W3mFrameHelpers_W3mFrameHelpers.getTimeToNextEmailLogin();this.error="";this.otp="";this.email=esm.Pc.state.data?.email;this.emailConnector=esm.AA.getEmailConnector()}render(){if(!this.email){throw new Error("w3m-email-otp-widget: No email provided")}const isResendDisabled=Boolean(this.timeoutTimeLeft);const footerLabels=this.getFooterLabels(isResendDisabled);return lit.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading?lit.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:lit.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?lit.dy`
                    <wui-text variant="small-400" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${footerLabels.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${isResendDisabled}>
            ${footerLabels.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=W3mFrameHelpers_W3mFrameHelpers.getTimeToNextEmailLogin();this.OTPTimeout=setInterval((()=>{if(this.timeoutTimeLeft>0){this.timeoutTimeLeft=W3mFrameHelpers_W3mFrameHelpers.getTimeToNextEmailLogin()}else{clearInterval(this.OTPTimeout)}}),1e3)}async onOtpInputChange(event){try{if(!this.loading){this.otp=event.detail;if(this.emailConnector&&this.otp.length===OTP_LENGTH){this.loading=true;await(this.onOtpSubmit?.(this.otp))}}}catch(error){this.error=esm.j1.parseError(error);this.loading=false}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="";this.otp="";const emailConnector=esm.AA.getEmailConnector();if(!emailConnector||!this.email){throw new Error("w3m-email-otp-widget: Unable to resend email")}this.loading=true;await this.onOtpResend(this.email);this.startOTPTimeout();esm.KC.showSuccess("Code email resent")}}else if(this.onStartOver){this.onStartOver()}}catch(error){esm.KC.showError(error)}finally{this.loading=false}}getFooterLabels(isResendDisabled){if(this.onStartOver){return{title:"Something wrong?",action:`Try again ${isResendDisabled?`in ${this.timeoutTimeLeft}s`:""}`}}return{title:`Didn't receive it?`,action:`Resend ${isResendDisabled?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};W3mEmailOtpWidget.styles=w3m_email_otp_widget_styles;w3m_email_otp_widget_decorate([(0,decorators.SB)()],W3mEmailOtpWidget.prototype,"loading",void 0);w3m_email_otp_widget_decorate([(0,decorators.SB)()],W3mEmailOtpWidget.prototype,"timeoutTimeLeft",void 0);w3m_email_otp_widget_decorate([(0,decorators.SB)()],W3mEmailOtpWidget.prototype,"error",void 0);W3mEmailOtpWidget=w3m_email_otp_widget_decorate([(0,dist_esm.customElement)("w3m-email-otp-widget")],W3mEmailOtpWidget);var w3m_email_verify_otp_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mEmailVerifyOtpView=class W3mEmailVerifyOtpView extends W3mEmailOtpWidget{constructor(){super();this.onOtpSubmit=async otp=>{try{if(this.emailConnector){await this.emailConnector.provider.connectOtp({otp});esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"});await esm.lZ.connectExternal(this.emailConnector);esm.IN.close();esm.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}})}}catch(error){esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"});throw error}};this.onOtpResend=async email=>{if(this.emailConnector){await this.emailConnector.provider.connectEmail({email});esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"})}}}};W3mEmailVerifyOtpView=w3m_email_verify_otp_view_decorate([(0,dist_esm.customElement)("w3m-email-verify-otp-view")],W3mEmailVerifyOtpView);const w3m_email_verify_device_view_styles=lit.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var w3m_email_verify_device_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mEmailVerifyDeviceView=class W3mEmailVerifyDeviceView extends lit.oi{constructor(){super();this.email=esm.Pc.state.data?.email;this.emailConnector=esm.AA.getEmailConnector();this.loading=false;this.listenForDeviceApproval()}render(){if(!this.email){throw new Error("w3m-email-verify-device-view: No email provided")}if(!this.emailConnector){throw new Error("w3m-email-verify-device-view: No email connector provided")}return lit.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 10 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector){await this.emailConnector.provider.connectDevice();esm.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"});esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"});esm.Pc.replace("EmailVerifyOtp",{email:this.email})}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email){throw new Error("w3m-email-login-widget: Unable to resend email")}this.loading=true;await this.emailConnector.provider.connectEmail({email:this.email});esm.KC.showSuccess("Code email resent")}}catch(error){esm.KC.showError(error)}finally{this.loading=false}}};W3mEmailVerifyDeviceView.styles=w3m_email_verify_device_view_styles;w3m_email_verify_device_view_decorate([(0,decorators.SB)()],W3mEmailVerifyDeviceView.prototype,"loading",void 0);W3mEmailVerifyDeviceView=w3m_email_verify_device_view_decorate([(0,dist_esm.customElement)("w3m-email-verify-device-view")],W3mEmailVerifyDeviceView);const w3m_approve_transaction_view_styles=lit.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var w3m_approve_transaction_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mApproveTransactionView=class W3mApproveTransactionView extends lit.oi{constructor(){super();this.bodyObserver=undefined;this.unsubscribe=[];this.iframe=document.getElementById("w3m-iframe");this.ready=false;this.unsubscribe.push(esm.IN.subscribeKey("open",(val=>{if(!val){this.onHideIframe()}})))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){const verticalPadding=10;this.iframe.style.display="block";const blueprint=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver((()=>{const data=blueprint?.getBoundingClientRect();const dimensions=data??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${dimensions.width}px`;this.iframe.style.height=`${dimensions.height-verticalPadding}px`;this.iframe.style.left=`${dimensions.left}px`;this.iframe.style.top=`${dimensions.top+verticalPadding/2}px`;this.ready=true}));this.bodyObserver.observe(window.document.body)}render(){if(this.ready){this.onShowIframe()}return lit.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){const isMobile=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:isMobile?"translateY(50px)":"scale(.95)"},{opacity:1,transform:isMobile?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished;this.iframe.style.display="none"}};W3mApproveTransactionView.styles=w3m_approve_transaction_view_styles;w3m_approve_transaction_view_decorate([(0,decorators.SB)()],W3mApproveTransactionView.prototype,"ready",void 0);W3mApproveTransactionView=w3m_approve_transaction_view_decorate([(0,dist_esm.customElement)("w3m-approve-transaction-view")],W3mApproveTransactionView);var w3m_upgrade_wallet_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mUpgradeWalletView=class W3mUpgradeWalletView extends lit.oi{render(){return lit.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${esm.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${esm.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};W3mUpgradeWalletView=w3m_upgrade_wallet_view_decorate([(0,dist_esm.customElement)("w3m-upgrade-wallet-view")],W3mUpgradeWalletView);var ref=__webpack_require__(5166);const w3m_update_email_wallet_view_styles=lit.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var w3m_update_email_wallet_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mUpdateEmailWalletView=class W3mUpdateEmailWalletView extends lit.oi{constructor(){super(...arguments);this.formRef=(0,ref.V)();this.initialEmail=esm.Pc.state.data?.email??"";this.email="";this.loading=false}firstUpdated(){this.formRef.value?.addEventListener("keydown",(event=>{if(event.key==="Enter"){this.onSubmitEmail(event)}}))}render(){const showSubmit=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return lit.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,ref.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${esm.Pc.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!showSubmit}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(event){this.email=event.detail}async onSubmitEmail(event){try{if(this.loading){return}this.loading=true;event.preventDefault();const emailConnector=esm.AA.getEmailConnector();if(!emailConnector){throw new Error("w3m-update-email-wallet: Email connector not found")}await emailConnector.provider.updateEmail({email:this.email});esm.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"});esm.Pc.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(error){esm.KC.showError(error);this.loading=false}}};W3mUpdateEmailWalletView.styles=w3m_update_email_wallet_view_styles;w3m_update_email_wallet_view_decorate([(0,decorators.SB)()],W3mUpdateEmailWalletView.prototype,"email",void 0);w3m_update_email_wallet_view_decorate([(0,decorators.SB)()],W3mUpdateEmailWalletView.prototype,"loading",void 0);W3mUpdateEmailWalletView=w3m_update_email_wallet_view_decorate([(0,dist_esm.customElement)("w3m-update-email-wallet-view")],W3mUpdateEmailWalletView);var w3m_update_email_primary_otp_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mUpdateEmailPrimaryOtpView=class W3mUpdateEmailPrimaryOtpView extends W3mEmailOtpWidget{constructor(){super();this.email=esm.Pc.state.data?.email;this.onOtpSubmit=async otp=>{try{if(this.emailConnector){await this.emailConnector.provider.updateEmailPrimaryOtp({otp});esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"});esm.Pc.replace("UpdateEmailSecondaryOtp",esm.Pc.state.data)}}catch(error){esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"});throw error}};this.onStartOver=()=>{esm.Pc.replace("UpdateEmailWallet",esm.Pc.state.data)}}};W3mUpdateEmailPrimaryOtpView=w3m_update_email_primary_otp_view_decorate([(0,dist_esm.customElement)("w3m-update-email-primary-otp-view")],W3mUpdateEmailPrimaryOtpView);var w3m_update_email_secondary_otp_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mUpdateEmailSecondaryOtpView=class W3mUpdateEmailSecondaryOtpView extends W3mEmailOtpWidget{constructor(){super();this.email=esm.Pc.state.data?.newEmail;this.onOtpSubmit=async otp=>{try{if(this.emailConnector){await this.emailConnector.provider.updateEmailSecondaryOtp({otp});esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"});esm.Pc.replace("Account",{email:this.email})}}catch(error){esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"});throw error}};this.onStartOver=()=>{esm.Pc.replace("UpdateEmailWallet",esm.Pc.state.data)}}};W3mUpdateEmailSecondaryOtpView=w3m_update_email_secondary_otp_view_decorate([(0,dist_esm.customElement)("w3m-update-email-secondary-otp-view")],W3mUpdateEmailSecondaryOtpView);const w3m_unsupported_chain_view_styles=lit.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var w3m_unsupported_chain_view_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mUnsupportedChainView=class W3mUnsupportedChainView extends lit.oi{constructor(){super(...arguments);this.disconecting=false}render(){return lit.dy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds,requestedCaipNetworks}=esm.fB.state;const sortedNetworks=esm.j1.sortRequestedNetworks(approvedCaipNetworkIds,requestedCaipNetworks);return sortedNetworks.map((network=>lit.dy`
        <wui-list-network
          imageSrc=${(0,if_defined.o)(esm.fz.getNetworkImage(network))}
          name=${network.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=true;await esm.lZ.disconnect();esm.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"});esm.IN.close()}catch{esm.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"});esm.KC.showError("Failed to disconnect")}finally{this.disconecting=false}}async onSwitchNetwork(network){const{isConnected}=esm.Ni.state;const{approvedCaipNetworkIds,supportsAllNetworks,caipNetwork}=esm.fB.state;const{data}=esm.Pc.state;if(isConnected&&caipNetwork?.id!==network.id){if(approvedCaipNetworkIds?.includes(network.id)){await esm.fB.switchActiveNetwork(network);esm._4.navigateAfterNetworkSwitch()}else if(supportsAllNetworks){esm.Pc.push("SwitchNetwork",{...data,network})}}else if(!isConnected){esm.fB.setCaipNetwork(network);esm.Pc.push("Connect")}}};W3mUnsupportedChainView.styles=w3m_unsupported_chain_view_styles;w3m_unsupported_chain_view_decorate([(0,decorators.SB)()],W3mUnsupportedChainView.prototype,"disconecting",void 0);W3mUnsupportedChainView=w3m_unsupported_chain_view_decorate([(0,dist_esm.customElement)("w3m-unsupported-chain-view")],W3mUnsupportedChainView);const w3m_all_wallets_list_styles=lit.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function markWalletsAsInstalled(wallets){const{connectors}=esm.AA.state;const installedConnectors=connectors.filter((c=>c.type==="ANNOUNCED")).reduce(((acum,val)=>{if(!val.info?.rdns){return acum}acum[val.info.rdns]=true;return acum}),{});const walletsWithInstalled=wallets.map((wallet=>({...wallet,installed:Boolean(wallet.rdns)&&Boolean(installedConnectors[wallet.rdns??""])})));const sortedWallets=walletsWithInstalled.sort(((a,b)=>Number(b.installed)-Number(a.installed)));return sortedWallets}var w3m_all_wallets_list_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const w3m_all_wallets_list_PAGINATOR_ID="local-paginator";let W3mAllWalletsList=class W3mAllWalletsList extends lit.oi{constructor(){super();this.unsubscribe=[];this.paginationObserver=undefined;this.initial=!esm.QT.state.wallets.length;this.wallets=esm.QT.state.wallets;this.recommended=esm.QT.state.recommended;this.featured=esm.QT.state.featured;this.unsubscribe.push(...[esm.QT.subscribeKey("wallets",(val=>this.wallets=val)),esm.QT.subscribeKey("recommended",(val=>this.recommended=val)),esm.QT.subscribeKey("featured",(val=>this.featured=val))])}firstUpdated(){this.initialFetch();this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));this.paginationObserver?.disconnect()}render(){return lit.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const gridEl=this.shadowRoot?.querySelector("wui-grid");if(this.initial&&gridEl){await esm.QT.fetchWallets({page:1});await gridEl.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.initial=false;gridEl.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}shimmerTemplate(items,id){return[...Array(items)].map((()=>lit.dy`
        <wui-card-select-loader type="wallet" id=${(0,if_defined.o)(id)}></wui-card-select-loader>
      `))}walletsTemplate(){const wallets=[...this.featured,...this.recommended,...this.wallets];const walletsWithInstalled=markWalletsAsInstalled(wallets);return walletsWithInstalled.map((wallet=>lit.dy`
        <wui-card-select
          imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(wallet))}
          type="wallet"
          name=${wallet.name}
          @click=${()=>this.onConnectWallet(wallet)}
          .installed=${wallet.installed}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets,recommended,featured,count}=esm.QT.state;const columns=window.innerWidth<352?3:4;const currentWallets=wallets.length+recommended.length;const minimumRows=Math.ceil(currentWallets/columns);let shimmerCount=minimumRows*columns-currentWallets+columns;shimmerCount-=wallets.length?featured.length%columns:0;if(count===0&&featured.length>0){return null}if(count===0||[...featured,...wallets,...recommended].length<count){return this.shimmerTemplate(shimmerCount,w3m_all_wallets_list_PAGINATOR_ID)}return null}createPaginationObserver(){const loaderEl=this.shadowRoot?.querySelector(`#${w3m_all_wallets_list_PAGINATOR_ID}`);if(loaderEl){this.paginationObserver=new IntersectionObserver((([element])=>{if(element?.isIntersecting&&!this.initial){const{page,count,wallets}=esm.QT.state;if(wallets.length<count){esm.QT.fetchWallets({page:page+1})}}}));this.paginationObserver.observe(loaderEl)}}onConnectWallet(wallet){const{connectors}=esm.AA.state;const connector=connectors.find((({explorerId})=>explorerId===wallet.id));if(connector){esm.Pc.push("ConnectingExternal",{connector})}else{esm.Pc.push("ConnectingWalletConnect",{wallet})}}};W3mAllWalletsList.styles=w3m_all_wallets_list_styles;w3m_all_wallets_list_decorate([(0,decorators.SB)()],W3mAllWalletsList.prototype,"initial",void 0);w3m_all_wallets_list_decorate([(0,decorators.SB)()],W3mAllWalletsList.prototype,"wallets",void 0);w3m_all_wallets_list_decorate([(0,decorators.SB)()],W3mAllWalletsList.prototype,"recommended",void 0);w3m_all_wallets_list_decorate([(0,decorators.SB)()],W3mAllWalletsList.prototype,"featured",void 0);W3mAllWalletsList=w3m_all_wallets_list_decorate([(0,dist_esm.customElement)("w3m-all-wallets-list")],W3mAllWalletsList);const w3m_all_wallets_search_styles=lit.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var w3m_all_wallets_search_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mAllWalletsSearch=class W3mAllWalletsSearch extends lit.oi{constructor(){super(...arguments);this.prevQuery="";this.loading=true;this.query=""}render(){this.onSearch();return this.loading?lit.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){if(this.query!==this.prevQuery){this.prevQuery=this.query;this.loading=true;await esm.QT.searchWallet({search:this.query});this.loading=false}}walletsTemplate(){const{search}=esm.QT.state;const wallets=markWalletsAsInstalled(search);if(!search.length){return lit.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}return lit.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${wallets.map((wallet=>lit.dy`
            <wui-card-select
              imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(wallet))}
              type="wallet"
              name=${wallet.name}
              @click=${()=>this.onConnectWallet(wallet)}
              .installed=${wallet.installed}
            ></wui-card-select>
          `))}
      </wui-grid>
    `}onConnectWallet(wallet){const{connectors}=esm.AA.state;const connector=connectors.find((({explorerId})=>explorerId===wallet.id));if(connector){esm.Pc.push("ConnectingExternal",{connector})}else{esm.Pc.push("ConnectingWalletConnect",{wallet})}}};W3mAllWalletsSearch.styles=w3m_all_wallets_search_styles;w3m_all_wallets_search_decorate([(0,decorators.SB)()],W3mAllWalletsSearch.prototype,"loading",void 0);w3m_all_wallets_search_decorate([(0,decorators.Cb)()],W3mAllWalletsSearch.prototype,"query",void 0);W3mAllWalletsSearch=w3m_all_wallets_search_decorate([(0,dist_esm.customElement)("w3m-all-wallets-search")],W3mAllWalletsSearch);var w3m_connecting_header_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingHeader=class W3mConnectingHeader extends lit.oi{constructor(){super();this.platformTabs=[];this.unsubscribe=[];this.platforms=[];this.onSelectPlatfrom=undefined;this.buffering=false;this.unsubscribe.push(esm.lZ.subscribeKey("buffering",(val=>this.buffering=val)))}disconnectCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const tabs=this.generateTabs();return lit.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${tabs}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const tabs=this.platforms.map((platform=>{if(platform==="browser"){return{label:"Browser",icon:"extension",platform:"browser"}}else if(platform==="mobile"){return{label:"Mobile",icon:"mobile",platform:"mobile"}}else if(platform==="qrcode"){return{label:"Mobile",icon:"mobile",platform:"qrcode"}}else if(platform==="web"){return{label:"Webapp",icon:"browser",platform:"web"}}else if(platform==="desktop"){return{label:"Desktop",icon:"desktop",platform:"desktop"}}return{label:"Browser",icon:"extension",platform:"unsupported"}}));this.platformTabs=tabs.map((({platform})=>platform));return tabs}onTabChange(index){const tab=this.platformTabs[index];if(tab){this.onSelectPlatfrom?.(tab)}}};w3m_connecting_header_decorate([(0,decorators.Cb)({type:Array})],W3mConnectingHeader.prototype,"platforms",void 0);w3m_connecting_header_decorate([(0,decorators.Cb)()],W3mConnectingHeader.prototype,"onSelectPlatfrom",void 0);w3m_connecting_header_decorate([(0,decorators.SB)()],W3mConnectingHeader.prototype,"buffering",void 0);W3mConnectingHeader=w3m_connecting_header_decorate([(0,dist_esm.customElement)("w3m-connecting-header")],W3mConnectingHeader);var w3m_connecting_wc_browser_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcBrowser=class W3mConnectingWcBrowser extends W3mConnectingWidget{constructor(){super();if(!this.wallet){throw new Error("w3m-connecting-wc-browser: No wallet provided")}this.onConnect=this.onConnectProxy.bind(this);this.onAutoConnect=this.onConnectProxy.bind(this);esm.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=false;const{connectors}=esm.AA.state;const announcedConnector=connectors.find((c=>c.type==="ANNOUNCED"&&c.info?.rdns===this.wallet?.rdns));const injectedConnector=connectors.find((c=>c.type==="INJECTED"));if(announcedConnector){await esm.lZ.connectExternal(announcedConnector)}else if(injectedConnector){await esm.lZ.connectExternal(injectedConnector)}esm.IN.close();esm.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(error){esm.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:error?.message??"Unknown"}});this.error=true}}};W3mConnectingWcBrowser=w3m_connecting_wc_browser_decorate([(0,dist_esm.customElement)("w3m-connecting-wc-browser")],W3mConnectingWcBrowser);var w3m_connecting_wc_desktop_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcDesktop=class W3mConnectingWcDesktop extends W3mConnectingWidget{constructor(){super();if(!this.wallet){throw new Error("w3m-connecting-wc-desktop: No wallet provided")}this.onConnect=this.onConnectProxy.bind(this);this.onRender=this.onRenderProxy.bind(this);esm.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){if(!this.ready&&this.uri){this.ready=true;this.timeout=setTimeout((()=>{this.onConnect?.()}),200)}}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri){try{this.error=false;const{desktop_link,name}=this.wallet;const{redirect,href}=esm.j1.formatNativeUrl(desktop_link,this.uri);esm.lZ.setWcLinking({name,href});esm.lZ.setRecentWallet(this.wallet);esm.j1.openHref(redirect,"_blank")}catch{this.error=true}}}};W3mConnectingWcDesktop=w3m_connecting_wc_desktop_decorate([(0,dist_esm.customElement)("w3m-connecting-wc-desktop")],W3mConnectingWcDesktop);var w3m_connecting_wc_mobile_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcMobile=class W3mConnectingWcMobile extends W3mConnectingWidget{constructor(){super();if(!this.wallet){throw new Error("w3m-connecting-wc-mobile: No wallet provided")}this.onConnect=this.onConnectProxy.bind(this);this.onRender=this.onRenderProxy.bind(this);document.addEventListener("visibilitychange",this.onBuffering.bind(this));esm.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback();document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){if(!this.ready&&this.uri){this.ready=true;this.onConnect?.()}}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri){try{this.error=false;const{mobile_link,name}=this.wallet;const{redirect,href}=esm.j1.formatNativeUrl(mobile_link,this.uri);esm.lZ.setWcLinking({name,href});esm.lZ.setRecentWallet(this.wallet);esm.j1.openHref(redirect,"_self")}catch{this.error=true}}}onBuffering(){const isIos=esm.j1.isIos();if(document?.visibilityState==="visible"&&!this.error&&isIos){esm.lZ.setBuffering(true);setTimeout((()=>{esm.lZ.setBuffering(false)}),5e3)}}};W3mConnectingWcMobile=w3m_connecting_wc_mobile_decorate([(0,dist_esm.customElement)("w3m-connecting-wc-mobile")],W3mConnectingWcMobile);const w3m_connecting_wc_qrcode_styles=lit.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var w3m_connecting_wc_qrcode_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcQrcode=class W3mConnectingWcQrcode extends W3mConnectingWidget{constructor(){super();this.forceUpdate=()=>{this.requestUpdate()};window.addEventListener("resize",this.forceUpdate);esm.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("resize",this.forceUpdate)}render(){this.onRenderProxy();return lit.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){if(!this.ready&&this.uri){this.timeout=setTimeout((()=>{this.ready=true}),200)}}qrCodeTemplate(){if(!this.uri||!this.ready){return null}const size=this.getBoundingClientRect().width-40;const alt=this.wallet?this.wallet.name:undefined;esm.lZ.setWcLinking(undefined);esm.lZ.setRecentWallet(this.wallet);return lit.dy` <wui-qr-code
      size=${size}
      theme=${esm.u0.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(this.wallet))}
      alt=${(0,if_defined.o)(alt)}
    ></wui-qr-code>`}copyTemplate(){const inactive=!this.uri||!this.ready;return lit.dy`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};W3mConnectingWcQrcode.styles=w3m_connecting_wc_qrcode_styles;W3mConnectingWcQrcode=w3m_connecting_wc_qrcode_decorate([(0,dist_esm.customElement)("w3m-connecting-wc-qrcode")],W3mConnectingWcQrcode);const w3m_connecting_siwe_styles=lit.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var w3m_connecting_siwe_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingSiwe=class W3mConnectingSiwe extends lit.oi{constructor(){super(...arguments);this.dappImageUrl=esm.hD.state.metadata?.icons;this.walletImageUrl=esm.MO.getConnectedWalletImageUrl()}firstUpdated(){const visuals=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");if(visuals?.[0]){this.createAnimation(visuals[0],"translate(18px)")}if(visuals?.[1]){this.createAnimation(visuals[1],"translate(-18px)")}}render(){return lit.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(element,translation){element.animate([{transform:"translateX(0px)"},{transform:translation}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:Infinity})}};W3mConnectingSiwe.styles=w3m_connecting_siwe_styles;W3mConnectingSiwe=w3m_connecting_siwe_decorate([(0,dist_esm.customElement)("w3m-connecting-siwe")],W3mConnectingSiwe);var w3m_connecting_wc_unsupported_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcUnsupported=class W3mConnectingWcUnsupported extends lit.oi{constructor(){super();this.wallet=esm.Pc.state.data?.wallet;if(!this.wallet){throw new Error("w3m-connecting-wc-unsupported: No wallet provided")}esm.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return lit.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,if_defined.o)(esm.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};W3mConnectingWcUnsupported=w3m_connecting_wc_unsupported_decorate([(0,dist_esm.customElement)("w3m-connecting-wc-unsupported")],W3mConnectingWcUnsupported);var w3m_connecting_wc_web_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mConnectingWcWeb=class W3mConnectingWcWeb extends W3mConnectingWidget{constructor(){super();if(!this.wallet){throw new Error("w3m-connecting-wc-web: No wallet provided")}this.onConnect=this.onConnectProxy.bind(this);this.secondaryBtnLabel="Open";this.secondaryLabel="Open and continue in a new browser tab";this.secondaryBtnIcon="externalLink";esm.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri){try{this.error=false;const{webapp_link,name}=this.wallet;const{redirect,href}=esm.j1.formatUniversalUrl(webapp_link,this.uri);esm.lZ.setWcLinking({name,href});esm.lZ.setRecentWallet(this.wallet);esm.j1.openHref(redirect,"_blank")}catch{this.error=true}}}};W3mConnectingWcWeb=w3m_connecting_wc_web_decorate([(0,dist_esm.customElement)("w3m-connecting-wc-web")],W3mConnectingWcWeb);const w3m_header_styles=lit.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var w3m_header_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};function headings(){const connectorName=esm.Pc.state.data?.connector?.name;const walletName=esm.Pc.state.data?.wallet?.name;const networkName=esm.Pc.state.data?.network?.name;const name=walletName??connectorName;const connectors=esm.AA.getConnectors();const isEmail=connectors.length===1&&connectors[0]?.id==="w3m-email";return{Connect:`Connect ${isEmail?"Email":""} Wallet`,Account:undefined,ConnectingExternal:name??"Connect Wallet",ConnectingWalletConnect:name??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:networkName??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:name?`Get ${name}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network"}}let W3mHeader=class W3mHeader extends lit.oi{constructor(){super();this.unsubscribe=[];this.heading=headings()[esm.Pc.state.view];this.buffering=false;this.showBack=false;this.unsubscribe.push(esm.Pc.subscribeKey("view",(val=>{this.onViewChange(val);this.onHistoryChange()})),esm.lZ.subscribeKey("buffering",(val=>this.buffering=val)))}disconnectCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){return lit.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){esm.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"});esm.Pc.push("WhatIsAWallet")}async onClose(){if(esm.yD.state.isSiweEnabled&&esm.yD.state.status!=="success"){await esm.lZ.disconnect()}esm.IN.close()}titleTemplate(){return lit.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view}=esm.Pc.state;const isConnectHelp=view==="Connect";const isApproveTransaction=view==="ApproveTransaction";if(this.showBack&&!isApproveTransaction){return lit.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`}return lit.dy`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){if(!this.heading){return null}return lit.dy`<wui-separator></wui-separator>`}getPadding(){if(this.heading){return["l","2l","l","2l"]}return["l","2l","0","2l"]}async onViewChange(view){const headingEl=this.shadowRoot?.querySelector("wui-text");if(headingEl){const preset=headings()[view];await headingEl.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.heading=preset;headingEl.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history}=esm.Pc.state;const buttonEl=this.shadowRoot?.querySelector("#dynamic");if(history.length>1&&!this.showBack&&buttonEl){await buttonEl.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.showBack=true;buttonEl.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}else if(history.length<=1&&this.showBack&&buttonEl){await buttonEl.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished;this.showBack=false;buttonEl.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}onGoBack(){if(esm.Pc.state.view==="ConnectingSiwe"){esm.Pc.push("Connect")}else{esm.Pc.goBack()}}};W3mHeader.styles=[w3m_header_styles];w3m_header_decorate([(0,decorators.SB)()],W3mHeader.prototype,"heading",void 0);w3m_header_decorate([(0,decorators.SB)()],W3mHeader.prototype,"buffering",void 0);w3m_header_decorate([(0,decorators.SB)()],W3mHeader.prototype,"showBack",void 0);W3mHeader=w3m_header_decorate([(0,dist_esm.customElement)("w3m-header")],W3mHeader);var w3m_help_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mHelpWidget=class W3mHelpWidget extends lit.oi{constructor(){super(...arguments);this.data=[]}render(){return lit.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((item=>lit.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${item.images.map((image=>lit.dy`<wui-visual name=${image}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${item.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${item.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};w3m_help_widget_decorate([(0,decorators.Cb)({type:Array})],W3mHelpWidget.prototype,"data",void 0);W3mHelpWidget=w3m_help_widget_decorate([(0,dist_esm.customElement)("w3m-help-widget")],W3mHelpWidget);const w3m_legal_footer_styles=lit.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var w3m_legal_footer_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mLegalFooter=class W3mLegalFooter extends lit.oi{render(){const{termsConditionsUrl,privacyPolicyUrl}=esm.hD.state;if(!termsConditionsUrl&&!privacyPolicyUrl){return null}return lit.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl,privacyPolicyUrl}=esm.hD.state;return termsConditionsUrl&&privacyPolicyUrl?"and":""}termsTemplate(){const{termsConditionsUrl}=esm.hD.state;if(!termsConditionsUrl){return null}return lit.dy`<a href=${termsConditionsUrl}>Terms of Service</a>`}privacyTemplate(){const{privacyPolicyUrl}=esm.hD.state;if(!privacyPolicyUrl){return null}return lit.dy`<a href=${privacyPolicyUrl}>Privacy Policy</a>`}};W3mLegalFooter.styles=[w3m_legal_footer_styles];W3mLegalFooter=w3m_legal_footer_decorate([(0,dist_esm.customElement)("w3m-legal-footer")],W3mLegalFooter);const w3m_mobile_download_links_styles=lit.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var w3m_mobile_download_links_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mMobileDownloadLinks=class W3mMobileDownloadLinks extends lit.oi{constructor(){super(...arguments);this.wallet=undefined}render(){if(!this.wallet){this.style.display="none";return null}const{name,app_store,play_store,chrome_store,homepage}=this.wallet;const isMobile=esm.j1.isMobile();const isIos=esm.j1.isIos();const isAndroid=esm.j1.isAndroid();const isMultiple=[app_store,play_store,homepage,chrome_store].filter(Boolean).length>1;const shortName=dist_esm.UiHelperUtil.getTruncateString({string:name,charsStart:12,charsEnd:0,truncate:"end"});if(isMultiple&&!isMobile){return lit.dy`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${()=>esm.Pc.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `}if(!isMultiple&&homepage){return lit.dy`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `}if(app_store&&isIos){return lit.dy`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `}if(play_store&&isAndroid){return lit.dy`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `}this.style.display="none";return null}onAppStore(){if(this.wallet?.app_store){esm.j1.openHref(this.wallet.app_store,"_blank")}}onPlayStore(){if(this.wallet?.play_store){esm.j1.openHref(this.wallet.play_store,"_blank")}}onHomePage(){if(this.wallet?.homepage){esm.j1.openHref(this.wallet.homepage,"_blank")}}};W3mMobileDownloadLinks.styles=[w3m_mobile_download_links_styles];w3m_mobile_download_links_decorate([(0,decorators.Cb)({type:Object})],W3mMobileDownloadLinks.prototype,"wallet",void 0);W3mMobileDownloadLinks=w3m_mobile_download_links_decorate([(0,dist_esm.customElement)("w3m-mobile-download-links")],W3mMobileDownloadLinks);const w3m_snackbar_styles=lit.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var w3m_snackbar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const presets={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let W3mSnackBar=class W3mSnackBar extends lit.oi{constructor(){super();this.unsubscribe=[];this.timeout=undefined;this.open=esm.KC.state.open;this.unsubscribe.push(esm.KC.subscribeKey("open",(val=>{this.open=val;this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout);this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}render(){const{message,variant}=esm.KC.state;const preset=presets[variant];return lit.dy`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset.backgroundColor}
        iconColor=${preset.iconColor}
        icon=${preset.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout);if(this.open){this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"});this.timeout=setTimeout((()=>esm.KC.hide()),2500)}else{this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}}};W3mSnackBar.styles=w3m_snackbar_styles;w3m_snackbar_decorate([(0,decorators.SB)()],W3mSnackBar.prototype,"open",void 0);W3mSnackBar=w3m_snackbar_decorate([(0,dist_esm.customElement)("w3m-snackbar")],W3mSnackBar);const w3m_email_login_widget_styles=lit.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var w3m_email_login_widget_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let W3mEmailLoginWidget=class W3mEmailLoginWidget extends lit.oi{constructor(){super();this.unsubscribe=[];this.formRef=(0,ref.V)();this.connectors=esm.AA.state.connectors;this.email="";this.loading=false;this.error="";this.unsubscribe.push(esm.AA.subscribeKey("connectors",(val=>this.connectors=val)))}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(event=>{if(event.key==="Enter"){this.onSubmitEmail(event)}}))}render(){const multipleConnectors=this.connectors.length>1;const connector=this.connectors.find((c=>c.type==="EMAIL"));if(!connector){return null}return lit.dy`
      ${this.alphaWarningTemplate()}
      <form ${(0,ref.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${multipleConnectors?lit.dy`<wui-separator text="or"></wui-separator>`:null}
    `}alphaWarningTemplate(){const showAlphaWarning=true;return showAlphaWarning?lit.dy`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">Email login is in alpha</wui-text>
          </wui-flex>
        `:null}submitButtonTemplate(){const showSubmit=!this.loading&&this.email.length>3;return showSubmit?lit.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?lit.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(event){this.email=event.detail;this.error=""}async onSubmitEmail(event){try{if(this.loading){return}this.loading=true;event.preventDefault();const emailConnector=esm.AA.getEmailConnector();if(!emailConnector){throw new Error("w3m-email-login-widget: Email connector not found")}const{action}=await emailConnector.provider.connectEmail({email:this.email});esm.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"});if(action==="VERIFY_OTP"){esm.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"});esm.Pc.push("EmailVerifyOtp",{email:this.email})}else if(action==="VERIFY_DEVICE"){esm.Pc.push("EmailVerifyDevice",{email:this.email})}}catch(error){const parsedError=esm.j1.parseError(error);if(parsedError?.includes("Invalid email")){this.error="Invalid email. Try again."}else{esm.KC.showError(error)}}finally{this.loading=false}}onFocusEvent(){esm.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};W3mEmailLoginWidget.styles=w3m_email_login_widget_styles;w3m_email_login_widget_decorate([(0,decorators.SB)()],W3mEmailLoginWidget.prototype,"connectors",void 0);w3m_email_login_widget_decorate([(0,decorators.SB)()],W3mEmailLoginWidget.prototype,"email",void 0);w3m_email_login_widget_decorate([(0,decorators.SB)()],W3mEmailLoginWidget.prototype,"loading",void 0);w3m_email_login_widget_decorate([(0,decorators.SB)()],W3mEmailLoginWidget.prototype,"error",void 0);W3mEmailLoginWidget=w3m_email_login_widget_decorate([(0,dist_esm.customElement)("w3m-email-login-widget")],W3mEmailLoginWidget);let isInitialized=false;class Web3ModalScaffold{constructor(options){this.initPromise=undefined;this.setIsConnected=isConnected=>{esm.Ni.setIsConnected(isConnected)};this.setCaipAddress=caipAddress=>{esm.Ni.setCaipAddress(caipAddress)};this.setBalance=(balance,balanceSymbol)=>{esm.Ni.setBalance(balance,balanceSymbol)};this.setProfileName=profileName=>{esm.Ni.setProfileName(profileName)};this.setProfileImage=profileImage=>{esm.Ni.setProfileImage(profileImage)};this.resetAccount=()=>{esm.Ni.resetAccount()};this.setCaipNetwork=caipNetwork=>{esm.fB.setCaipNetwork(caipNetwork)};this.getCaipNetwork=()=>esm.fB.state.caipNetwork;this.setRequestedCaipNetworks=requestedCaipNetworks=>{esm.fB.setRequestedCaipNetworks(requestedCaipNetworks)};this.getApprovedCaipNetworksData=()=>esm.fB.getApprovedCaipNetworksData();this.resetNetwork=()=>{esm.fB.resetNetwork()};this.setConnectors=connectors=>{esm.AA.setConnectors(connectors)};this.addConnector=connector=>{esm.AA.addConnector(connector)};this.getConnectors=()=>esm.AA.getConnectors();this.resetWcConnection=()=>{esm.lZ.resetWcConnection()};this.fetchIdentity=request=>esm.Lr.fetchIdentity(request);this.setAddressExplorerUrl=addressExplorerUrl=>{esm.Ni.setAddressExplorerUrl(addressExplorerUrl)};this.setSIWENonce=nonce=>{esm.yD.setNonce(nonce)};this.setSIWESession=session=>{esm.yD.setSession(session)};this.setSIWEStatus=status=>{esm.yD.setStatus(status)};this.setSIWEMessage=message=>{esm.yD.setMessage(message)};this.initControllers(options);this.initOrContinue()}async open(options){await this.initOrContinue();esm.IN.open(options)}async close(){await this.initOrContinue();esm.IN.close()}setLoading(loading){esm.IN.setLoading(loading)}getThemeMode(){return esm.u0.state.themeMode}getThemeVariables(){return esm.u0.state.themeVariables}setThemeMode(themeMode){esm.u0.setThemeMode(themeMode);(0,dist_esm.setColorTheme)(esm.u0.state.themeMode);try{const emailConnector=esm.AA.getEmailConnector();if(emailConnector){emailConnector.provider.syncTheme({themeMode:esm.u0.getSnapshot().themeMode})}}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(themeVariables){esm.u0.setThemeVariables(themeVariables);(0,dist_esm.setThemeVariables)(esm.u0.state.themeVariables);try{const emailConnector=esm.AA.getEmailConnector();if(emailConnector){emailConnector.provider.syncTheme({themeVariables:esm.u0.getSnapshot().themeVariables})}}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(callback){return esm.u0.subscribe(callback)}getState(){return{...esm.Ie.state}}subscribeState(callback){return esm.Ie.subscribe(callback)}getEvent(){return{...esm.Xs.state}}subscribeEvents(callback){return esm.Xs.subscribe(callback)}subscribeSIWEState(callback){return esm.yD.subscribe(callback)}initControllers(options){esm.fB.setClient(options.networkControllerClient);esm.fB.setDefaultCaipNetwork(options.defaultChain);esm.hD.setProjectId(options.projectId);esm.hD.setAllWallets(options.allWallets);esm.hD.setIncludeWalletIds(options.includeWalletIds);esm.hD.setExcludeWalletIds(options.excludeWalletIds);esm.hD.setFeaturedWalletIds(options.featuredWalletIds);esm.hD.setTokens(options.tokens);esm.hD.setTermsConditionsUrl(options.termsConditionsUrl);esm.hD.setPrivacyPolicyUrl(options.privacyPolicyUrl);esm.hD.setCustomWallets(options.customWallets);esm.hD.setEnableAnalytics(options.enableAnalytics);esm.hD.setSdkVersion(options._sdkVersion);esm.lZ.setClient(options.connectionControllerClient);if(options.siweControllerClient){const siweClient=options.siweControllerClient;esm.yD.setSIWEClient(siweClient)}if(options.metadata){esm.hD.setMetadata(options.metadata)}if(options.themeMode){esm.u0.setThemeMode(options.themeMode)}if(options.themeVariables){esm.u0.setThemeVariables(options.themeVariables)}}async initOrContinue(){if(!this.initPromise&&!isInitialized&&esm.j1.isClient()){isInitialized=true;this.initPromise=new Promise((async resolve=>{await Promise.all([Promise.resolve().then(__webpack_require__.bind(__webpack_require__,17706)),Promise.resolve().then(__webpack_require__.bind(__webpack_require__,58014))]);const modal=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",modal);resolve()}))}return this.initPromise}}const package_namespaceObject={i8:"4.0.1"};const ConstantsUtil={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:package_namespaceObject.i8};const PresetsUtil={ConnectorExplorerIds:{[ConstantsUtil.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ConstantsUtil.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[ConstantsUtil.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00"},ConnectorImageIds:{[ConstantsUtil.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ConstantsUtil.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ConstantsUtil.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[ConstantsUtil.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ConstantsUtil.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[ConstantsUtil.INJECTED_CONNECTOR_ID]:"Browser Wallet",[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[ConstantsUtil.COINBASE_CONNECTOR_ID]:"Coinbase",[ConstantsUtil.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[ConstantsUtil.LEDGER_CONNECTOR_ID]:"Ledger",[ConstantsUtil.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[ConstantsUtil.INJECTED_CONNECTOR_ID]:"INJECTED",[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[ConstantsUtil.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[ConstantsUtil.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]};const HelpersUtil={caipNetworkIdToNumber(caipnetworkId){return caipnetworkId?Number(caipnetworkId.split(":")[1]):undefined},getCaipTokens(tokens){if(!tokens){return undefined}const caipTokens={};Object.entries(tokens).forEach((([id,token])=>{caipTokens[`${ConstantsUtil.EIP155}:${id}`]=token}));return caipTokens}};var events=__webpack_require__(63683);var events_default=__webpack_require__.n(events);var index_cjs=__webpack_require__(85562);var dist_index_cjs=__webpack_require__(57511);var cjs=__webpack_require__(41417);var browser_ponyfill=__webpack_require__(2883);var browser_ponyfill_default=__webpack_require__.n(browser_ponyfill);var safe_json_dist_esm=__webpack_require__(97530);var jsonrpc_utils_dist_esm=__webpack_require__(8378);const DEFAULT_HTTP_HEADERS={Accept:"application/json","Content-Type":"application/json"};const DEFAULT_HTTP_METHOD="POST";const DEFAULT_FETCH_OPTS={headers:DEFAULT_HTTP_HEADERS,method:DEFAULT_HTTP_METHOD};const EVENT_EMITTER_MAX_LISTENERS_DEFAULT=10;class HttpConnection{constructor(url,disableProviderPing=false){this.url=url;this.disableProviderPing=disableProviderPing;this.events=new events.EventEmitter;this.isAvailable=false;this.registering=false;if(!(0,jsonrpc_utils_dist_esm.isHttpUrl)(url)){throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`)}this.url=url;this.disableProviderPing=disableProviderPing}get connected(){return this.isAvailable}get connecting(){return this.registering}on(event,listener){this.events.on(event,listener)}once(event,listener){this.events.once(event,listener)}off(event,listener){this.events.off(event,listener)}removeListener(event,listener){this.events.removeListener(event,listener)}async open(url=this.url){await this.register(url)}async close(){if(!this.isAvailable){throw new Error("Connection already closed")}this.onClose()}async send(payload,context){if(!this.isAvailable){await this.register()}try{const body=(0,safe_json_dist_esm.safeJsonStringify)(payload);const res=await browser_ponyfill_default()(this.url,Object.assign(Object.assign({},DEFAULT_FETCH_OPTS),{body}));const data=await res.json();this.onPayload({data})}catch(e){this.onError(payload.id,e)}}async register(url=this.url){if(!(0,jsonrpc_utils_dist_esm.isHttpUrl)(url)){throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`)}if(this.registering){const currentMaxListeners=this.events.getMaxListeners();if(this.events.listenerCount("register_error")>=currentMaxListeners||this.events.listenerCount("open")>=currentMaxListeners){this.events.setMaxListeners(currentMaxListeners+1)}return new Promise(((resolve,reject)=>{this.events.once("register_error",(error=>{this.resetMaxListeners();reject(error)}));this.events.once("open",(()=>{this.resetMaxListeners();if(typeof this.isAvailable==="undefined"){return reject(new Error("HTTP connection is missing or invalid"))}resolve()}))}))}this.url=url;this.registering=true;try{if(!this.disableProviderPing){const body=(0,safe_json_dist_esm.safeJsonStringify)({id:1,jsonrpc:"2.0",method:"test",params:[]});await browser_ponyfill_default()(url,Object.assign(Object.assign({},DEFAULT_FETCH_OPTS),{body}))}this.onOpen()}catch(e){const error=this.parseError(e);this.events.emit("register_error",error);this.onClose();throw error}}onOpen(){this.isAvailable=true;this.registering=false;this.events.emit("open")}onClose(){this.isAvailable=false;this.registering=false;this.events.emit("close")}onPayload(e){if(typeof e.data==="undefined")return;const payload=typeof e.data==="string"?(0,safe_json_dist_esm.safeJsonParse)(e.data):e.data;this.events.emit("payload",payload)}onError(id,e){const error=this.parseError(e);const message=error.message||error.toString();const payload=(0,jsonrpc_utils_dist_esm.formatJsonRpcError)(id,message);this.events.emit("payload",payload)}parseError(e,url=this.url){return(0,jsonrpc_utils_dist_esm.parseConnectionError)(e,url,"HTTP")}resetMaxListeners(){if(this.events.getMaxListeners()>EVENT_EMITTER_MAX_LISTENERS_DEFAULT){this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT)}}}const http=HttpConnection;const jsonrpc_http_connection_dist_esm=http;var jsonrpc_provider_dist_esm=__webpack_require__(79328);const Ia="error",Fg="wss://relay.walletconnect.com",Mg="wc",qg="universal_provider",xa=`${Mg}@2:${qg}:`,Bg="https://rpc.walletconnect.com/v1/",Vn={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ui={exports:{}};(function(A,u){(function(){var i,d="4.17.21",w=200,L="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",D="Expected a function",En="Invalid `variable` option passed into `_.template`",zt="__lodash_hash_undefined__",pr=500,It="__lodash_placeholder__",Ln=1,Fn=2,xt=4,Et=1,ve=2,vn=1,ct=2,qi=4,Dn=8,yt=16,Hn=32,St=64,Mn=128,Kt=256,dr=512,Da=30,Ha="...",Na=800,$a=16,Bi=1,Ua=2,Wa=3,ht=1/0,kn=9007199254740991,Fa=17976931348623157e292,_e=0/0,Nn=4294967295,Ma=Nn-1,qa=Nn>>>1,Ba=[["ary",Mn],["bind",vn],["bindKey",ct],["curry",Dn],["curryRight",yt],["flip",dr],["partial",Hn],["partialRight",St],["rearg",Kt]],Ot="[object Arguments]",me="[object Array]",Ga="[object AsyncFunction]",Yt="[object Boolean]",Zt="[object Date]",za="[object DOMException]",we="[object Error]",Pe="[object Function]",Gi="[object GeneratorFunction]",yn="[object Map]",Jt="[object Number]",Ka="[object Null]",qn="[object Object]",zi="[object Promise]",Ya="[object Proxy]",Xt="[object RegExp]",Sn="[object Set]",Qt="[object String]",Ae="[object Symbol]",Za="[object Undefined]",Vt="[object WeakMap]",Ja="[object WeakSet]",kt="[object ArrayBuffer]",Rt="[object DataView]",gr="[object Float32Array]",vr="[object Float64Array]",_r="[object Int8Array]",mr="[object Int16Array]",wr="[object Int32Array]",Pr="[object Uint8Array]",Ar="[object Uint8ClampedArray]",Cr="[object Uint16Array]",Ir="[object Uint32Array]",Xa=/\b__p \+= '';/g,Qa=/\b(__p \+=) '' \+/g,Va=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ki=/&(?:amp|lt|gt|quot|#39);/g,Yi=/[&<>"']/g,ka=RegExp(Ki.source),ja=RegExp(Yi.source),no=/<%-([\s\S]+?)%>/g,to=/<%([\s\S]+?)%>/g,Zi=/<%=([\s\S]+?)%>/g,eo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ro=/^\w*$/,io=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xr=/[\\^$.*+?()[\]{}|]/g,so=RegExp(xr.source),Er=/^\s+/,uo=/\s/,ao=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oo=/\{\n\/\* \[wrapped with (.+)\] \*/,fo=/,? & /,co=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ho=/[()=,{}\[\]\/\s]/,lo=/\\(\\)?/g,po=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ji=/\w*$/,go=/^[-+]0x[0-9a-f]+$/i,vo=/^0b[01]+$/i,_o=/^\[object .+?Constructor\]$/,mo=/^0o[0-7]+$/i,wo=/^(?:0|[1-9]\d*)$/,Po=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ce=/($^)/,Ao=/['\n\r\u2028\u2029\\]/g,Ie="\\ud800-\\udfff",Co="\\u0300-\\u036f",Io="\\ufe20-\\ufe2f",xo="\\u20d0-\\u20ff",Xi=Co+Io+xo,Qi="\\u2700-\\u27bf",Vi="a-z\\xdf-\\xf6\\xf8-\\xff",Eo="\\xac\\xb1\\xd7\\xf7",yo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",So="\\u2000-\\u206f",Oo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ki="A-Z\\xc0-\\xd6\\xd8-\\xde",ji="\\ufe0e\\ufe0f",ns=Eo+yo+So+Oo,yr="['’]",Ro="["+Ie+"]",ts="["+ns+"]",xe="["+Xi+"]",es="\\d+",bo="["+Qi+"]",rs="["+Vi+"]",is="[^"+Ie+ns+es+Qi+Vi+ki+"]",Sr="\\ud83c[\\udffb-\\udfff]",To="(?:"+xe+"|"+Sr+")",ss="[^"+Ie+"]",Or="(?:\\ud83c[\\udde6-\\uddff]){2}",Rr="[\\ud800-\\udbff][\\udc00-\\udfff]",bt="["+ki+"]",us="\\u200d",as="(?:"+rs+"|"+is+")",Lo="(?:"+bt+"|"+is+")",os="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",fs="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",cs=To+"?",hs="["+ji+"]?",Do="(?:"+us+"(?:"+[ss,Or,Rr].join("|")+")"+hs+cs+")*",Ho="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",No="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ls=hs+cs+Do,$o="(?:"+[bo,Or,Rr].join("|")+")"+ls,Uo="(?:"+[ss+xe+"?",xe,Or,Rr,Ro].join("|")+")",Wo=RegExp(yr,"g"),Fo=RegExp(xe,"g"),br=RegExp(Sr+"(?="+Sr+")|"+Uo+ls,"g"),Mo=RegExp([bt+"?"+rs+"+"+os+"(?="+[ts,bt,"$"].join("|")+")",Lo+"+"+fs+"(?="+[ts,bt+as,"$"].join("|")+")",bt+"?"+as+"+"+os,bt+"+"+fs,No,Ho,es,$o].join("|"),"g"),qo=RegExp("["+us+Ie+Xi+ji+"]"),Bo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Go=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zo=-1,B={};B[gr]=B[vr]=B[_r]=B[mr]=B[wr]=B[Pr]=B[Ar]=B[Cr]=B[Ir]=!0,B[Ot]=B[me]=B[kt]=B[Yt]=B[Rt]=B[Zt]=B[we]=B[Pe]=B[yn]=B[Jt]=B[qn]=B[Xt]=B[Sn]=B[Qt]=B[Vt]=!1;var q={};q[Ot]=q[me]=q[kt]=q[Rt]=q[Yt]=q[Zt]=q[gr]=q[vr]=q[_r]=q[mr]=q[wr]=q[yn]=q[Jt]=q[qn]=q[Xt]=q[Sn]=q[Qt]=q[Ae]=q[Pr]=q[Ar]=q[Cr]=q[Ir]=!0,q[we]=q[Pe]=q[Vt]=!1;var Ko={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Yo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zo={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Jo={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Xo=parseFloat,Qo=parseInt,ps=typeof ge=="object"&&ge&&ge.Object===Object&&ge,Vo=typeof self=="object"&&self&&self.Object===Object&&self,k=ps||Vo||Function("return this")(),Tr=u&&!u.nodeType&&u,lt=Tr&&!0&&A&&!A.nodeType&&A,ds=lt&&lt.exports===Tr,Lr=ds&&ps.process,_n=function(){try{var h=lt&&lt.require&&lt.require("util").types;return h||Lr&&Lr.binding&&Lr.binding("util")}catch{}}(),gs=_n&&_n.isArrayBuffer,vs=_n&&_n.isDate,_s=_n&&_n.isMap,ms=_n&&_n.isRegExp,ws=_n&&_n.isSet,Ps=_n&&_n.isTypedArray;function cn(h,g,p){switch(p.length){case 0:return h.call(g);case 1:return h.call(g,p[0]);case 2:return h.call(g,p[0],p[1]);case 3:return h.call(g,p[0],p[1],p[2])}return h.apply(g,p)}function ko(h,g,p,C){for(var S=-1,U=h==null?0:h.length;++S<U;){var X=h[S];g(C,X,p(X),h)}return C}function mn(h,g){for(var p=-1,C=h==null?0:h.length;++p<C&&g(h[p],p,h)!==!1;);return h}function jo(h,g){for(var p=h==null?0:h.length;p--&&g(h[p],p,h)!==!1;);return h}function As(h,g){for(var p=-1,C=h==null?0:h.length;++p<C;)if(!g(h[p],p,h))return!1;return!0}function jn(h,g){for(var p=-1,C=h==null?0:h.length,S=0,U=[];++p<C;){var X=h[p];g(X,p,h)&&(U[S++]=X)}return U}function Ee(h,g){var p=h==null?0:h.length;return!!p&&Tt(h,g,0)>-1}function Dr(h,g,p){for(var C=-1,S=h==null?0:h.length;++C<S;)if(p(g,h[C]))return!0;return!1}function G(h,g){for(var p=-1,C=h==null?0:h.length,S=Array(C);++p<C;)S[p]=g(h[p],p,h);return S}function nt(h,g){for(var p=-1,C=g.length,S=h.length;++p<C;)h[S+p]=g[p];return h}function Hr(h,g,p,C){var S=-1,U=h==null?0:h.length;for(C&&U&&(p=h[++S]);++S<U;)p=g(p,h[S],S,h);return p}function nf(h,g,p,C){var S=h==null?0:h.length;for(C&&S&&(p=h[--S]);S--;)p=g(p,h[S],S,h);return p}function Nr(h,g){for(var p=-1,C=h==null?0:h.length;++p<C;)if(g(h[p],p,h))return!0;return!1}var tf=$r("length");function ef(h){return h.split("")}function rf(h){return h.match(co)||[]}function Cs(h,g,p){var C;return p(h,(function(S,U,X){if(g(S,U,X))return C=U,!1})),C}function ye(h,g,p,C){for(var S=h.length,U=p+(C?1:-1);C?U--:++U<S;)if(g(h[U],U,h))return U;return-1}function Tt(h,g,p){return g===g?vf(h,g,p):ye(h,Is,p)}function sf(h,g,p,C){for(var S=p-1,U=h.length;++S<U;)if(C(h[S],g))return S;return-1}function Is(h){return h!==h}function xs(h,g){var p=h==null?0:h.length;return p?Wr(h,g)/p:_e}function $r(h){return function(g){return g==null?i:g[h]}}function Ur(h){return function(g){return h==null?i:h[g]}}function Es(h,g,p,C,S){return S(h,(function(U,X,M){p=C?(C=!1,U):g(p,U,X,M)})),p}function uf(h,g){var p=h.length;for(h.sort(g);p--;)h[p]=h[p].value;return h}function Wr(h,g){for(var p,C=-1,S=h.length;++C<S;){var U=g(h[C]);U!==i&&(p=p===i?U:p+U)}return p}function Fr(h,g){for(var p=-1,C=Array(h);++p<h;)C[p]=g(p);return C}function af(h,g){return G(g,(function(p){return[p,h[p]]}))}function ys(h){return h&&h.slice(0,bs(h)+1).replace(Er,"")}function hn(h){return function(g){return h(g)}}function Mr(h,g){return G(g,(function(p){return h[p]}))}function jt(h,g){return h.has(g)}function Ss(h,g){for(var p=-1,C=h.length;++p<C&&Tt(g,h[p],0)>-1;);return p}function Os(h,g){for(var p=h.length;p--&&Tt(g,h[p],0)>-1;);return p}function of(h,g){for(var p=h.length,C=0;p--;)h[p]===g&&++C;return C}var ff=Ur(Ko),cf=Ur(Yo);function hf(h){return"\\"+Jo[h]}function lf(h,g){return h==null?i:h[g]}function Lt(h){return qo.test(h)}function pf(h){return Bo.test(h)}function df(h){for(var g,p=[];!(g=h.next()).done;)p.push(g.value);return p}function qr(h){var g=-1,p=Array(h.size);return h.forEach((function(C,S){p[++g]=[S,C]})),p}function Rs(h,g){return function(p){return h(g(p))}}function tt(h,g){for(var p=-1,C=h.length,S=0,U=[];++p<C;){var X=h[p];(X===g||X===It)&&(h[p]=It,U[S++]=p)}return U}function Se(h){var g=-1,p=Array(h.size);return h.forEach((function(C){p[++g]=C})),p}function gf(h){var g=-1,p=Array(h.size);return h.forEach((function(C){p[++g]=[C,C]})),p}function vf(h,g,p){for(var C=p-1,S=h.length;++C<S;)if(h[C]===g)return C;return-1}function _f(h,g,p){for(var C=p+1;C--;)if(h[C]===g)return C;return C}function Dt(h){return Lt(h)?wf(h):tf(h)}function On(h){return Lt(h)?Pf(h):ef(h)}function bs(h){for(var g=h.length;g--&&uo.test(h.charAt(g)););return g}var mf=Ur(Zo);function wf(h){for(var g=br.lastIndex=0;br.test(h);)++g;return g}function Pf(h){return h.match(br)||[]}function Af(h){return h.match(Mo)||[]}var Cf=function h(g){g=g==null?k:Ht.defaults(k.Object(),g,Ht.pick(k,Go));var p=g.Array,C=g.Date,S=g.Error,U=g.Function,X=g.Math,M=g.Object,Br=g.RegExp,If=g.String,wn=g.TypeError,Oe=p.prototype,xf=U.prototype,Nt=M.prototype,Re=g["__core-js_shared__"],be=xf.toString,F=Nt.hasOwnProperty,Ef=0,Ts=function(){var n=/[^.]+$/.exec(Re&&Re.keys&&Re.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Te=Nt.toString,yf=be.call(M),Sf=k._,Of=Br("^"+be.call(F).replace(xr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Le=ds?g.Buffer:i,et=g.Symbol,De=g.Uint8Array,Ls=Le?Le.allocUnsafe:i,He=Rs(M.getPrototypeOf,M),Ds=M.create,Hs=Nt.propertyIsEnumerable,Ne=Oe.splice,Ns=et?et.isConcatSpreadable:i,ne=et?et.iterator:i,pt=et?et.toStringTag:i,$e=function(){try{var n=mt(M,"defineProperty");return n({},"",{}),n}catch{}}(),Rf=g.clearTimeout!==k.clearTimeout&&g.clearTimeout,bf=C&&C.now!==k.Date.now&&C.now,Tf=g.setTimeout!==k.setTimeout&&g.setTimeout,Ue=X.ceil,We=X.floor,Gr=M.getOwnPropertySymbols,Lf=Le?Le.isBuffer:i,$s=g.isFinite,Df=Oe.join,Hf=Rs(M.keys,M),Q=X.max,nn=X.min,Nf=C.now,$f=g.parseInt,Us=X.random,Uf=Oe.reverse,zr=mt(g,"DataView"),te=mt(g,"Map"),Kr=mt(g,"Promise"),$t=mt(g,"Set"),ee=mt(g,"WeakMap"),re=mt(M,"create"),Fe=ee&&new ee,Ut={},Wf=wt(zr),Ff=wt(te),Mf=wt(Kr),qf=wt($t),Bf=wt(ee),Me=et?et.prototype:i,ie=Me?Me.valueOf:i,Ws=Me?Me.toString:i;function a(n){if(Y(n)&&!O(n)&&!(n instanceof N)){if(n instanceof Pn)return n;if(F.call(n,"__wrapped__"))return Fu(n)}return new Pn(n)}var Wt=function(){function n(){}return function(t){if(!K(t))return{};if(Ds)return Ds(t);n.prototype=t;var e=new n;return n.prototype=i,e}}();function qe(){}function Pn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}a.templateSettings={escape:no,evaluate:to,interpolate:Zi,variable:"",imports:{_:a}},a.prototype=qe.prototype,a.prototype.constructor=a,Pn.prototype=Wt(qe.prototype),Pn.prototype.constructor=Pn;function N(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nn,this.__views__=[]}function Gf(){var n=new N(this.__wrapped__);return n.__actions__=un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=un(this.__views__),n}function zf(){if(this.__filtered__){var n=new N(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Kf(){var n=this.__wrapped__.value(),t=this.__dir__,e=O(n),r=t<0,s=e?n.length:0,o=rh(0,s,this.__views__),f=o.start,c=o.end,l=c-f,v=r?c:f-1,_=this.__iteratees__,m=_.length,P=0,I=nn(l,this.__takeCount__);if(!e||!r&&s==l&&I==l)return ou(n,this.__actions__);var E=[];n:for(;l--&&P<I;){v+=t;for(var b=-1,y=n[v];++b<m;){var H=_[b],$=H.iteratee,dn=H.type,sn=$(y);if(dn==Ua)y=sn;else if(!sn){if(dn==Bi)continue n;break n}}E[P++]=y}return E}N.prototype=Wt(qe.prototype),N.prototype.constructor=N;function dt(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Yf(){this.__data__=re?re(null):{},this.size=0}function Zf(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function Jf(n){var t=this.__data__;if(re){var e=t[n];return e===zt?i:e}return F.call(t,n)?t[n]:i}function Xf(n){var t=this.__data__;return re?t[n]!==i:F.call(t,n)}function Qf(n,t){var e=this.__data__;return this.size+=this.has(n)?0:1,e[n]=re&&t===i?zt:t,this}dt.prototype.clear=Yf,dt.prototype.delete=Zf,dt.prototype.get=Jf,dt.prototype.has=Xf,dt.prototype.set=Qf;function Bn(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Vf(){this.__data__=[],this.size=0}function kf(n){var t=this.__data__,e=Be(t,n);if(e<0)return!1;var r=t.length-1;return e==r?t.pop():Ne.call(t,e,1),--this.size,!0}function jf(n){var t=this.__data__,e=Be(t,n);return e<0?i:t[e][1]}function nc(n){return Be(this.__data__,n)>-1}function tc(n,t){var e=this.__data__,r=Be(e,n);return r<0?(++this.size,e.push([n,t])):e[r][1]=t,this}Bn.prototype.clear=Vf,Bn.prototype.delete=kf,Bn.prototype.get=jf,Bn.prototype.has=nc,Bn.prototype.set=tc;function Gn(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function ec(){this.size=0,this.__data__={hash:new dt,map:new(te||Bn),string:new dt}}function rc(n){var t=nr(this,n).delete(n);return this.size-=t?1:0,t}function ic(n){return nr(this,n).get(n)}function sc(n){return nr(this,n).has(n)}function uc(n,t){var e=nr(this,n),r=e.size;return e.set(n,t),this.size+=e.size==r?0:1,this}Gn.prototype.clear=ec,Gn.prototype.delete=rc,Gn.prototype.get=ic,Gn.prototype.has=sc,Gn.prototype.set=uc;function gt(n){var t=-1,e=n==null?0:n.length;for(this.__data__=new Gn;++t<e;)this.add(n[t])}function ac(n){return this.__data__.set(n,zt),this}function oc(n){return this.__data__.has(n)}gt.prototype.add=gt.prototype.push=ac,gt.prototype.has=oc;function Rn(n){var t=this.__data__=new Bn(n);this.size=t.size}function fc(){this.__data__=new Bn,this.size=0}function cc(n){var t=this.__data__,e=t.delete(n);return this.size=t.size,e}function hc(n){return this.__data__.get(n)}function lc(n){return this.__data__.has(n)}function pc(n,t){var e=this.__data__;if(e instanceof Bn){var r=e.__data__;if(!te||r.length<w-1)return r.push([n,t]),this.size=++e.size,this;e=this.__data__=new Gn(r)}return e.set(n,t),this.size=e.size,this}Rn.prototype.clear=fc,Rn.prototype.delete=cc,Rn.prototype.get=hc,Rn.prototype.has=lc,Rn.prototype.set=pc;function Fs(n,t){var e=O(n),r=!e&&Pt(n),s=!e&&!r&&at(n),o=!e&&!r&&!s&&Bt(n),f=e||r||s||o,c=f?Fr(n.length,If):[],l=c.length;for(var v in n)(t||F.call(n,v))&&!(f&&(v=="length"||s&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Zn(v,l)))&&c.push(v);return c}function Ms(n){var t=n.length;return t?n[ei(0,t-1)]:i}function dc(n,t){return tr(un(n),vt(t,0,n.length))}function gc(n){return tr(un(n))}function Yr(n,t,e){(e!==i&&!bn(n[t],e)||e===i&&!(t in n))&&zn(n,t,e)}function se(n,t,e){var r=n[t];(!(F.call(n,t)&&bn(r,e))||e===i&&!(t in n))&&zn(n,t,e)}function Be(n,t){for(var e=n.length;e--;)if(bn(n[e][0],t))return e;return-1}function vc(n,t,e,r){return rt(n,(function(s,o,f){t(r,s,e(s),f)})),r}function qs(n,t){return n&&Un(t,V(t),n)}function _c(n,t){return n&&Un(t,on(t),n)}function zn(n,t,e){t=="__proto__"&&$e?$e(n,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[t]=e}function Zr(n,t){for(var e=-1,r=t.length,s=p(r),o=n==null;++e<r;)s[e]=o?i:Si(n,t[e]);return s}function vt(n,t,e){return n===n&&(e!==i&&(n=n<=e?n:e),t!==i&&(n=n>=t?n:t)),n}function An(n,t,e,r,s,o){var f,c=t&Ln,l=t&Fn,v=t&xt;if(e&&(f=s?e(n,r,s,o):e(n)),f!==i)return f;if(!K(n))return n;var _=O(n);if(_){if(f=sh(n),!c)return un(n,f)}else{var m=tn(n),P=m==Pe||m==Gi;if(at(n))return hu(n,c);if(m==qn||m==Ot||P&&!s){if(f=l||P?{}:bu(n),!c)return l?Jc(n,_c(f,n)):Zc(n,qs(f,n))}else{if(!q[m])return s?n:{};f=uh(n,m,c)}}o||(o=new Rn);var I=o.get(n);if(I)return I;o.set(n,f),sa(n)?n.forEach((function(y){f.add(An(y,t,e,y,n,o))})):ra(n)&&n.forEach((function(y,H){f.set(H,An(y,t,e,H,n,o))}));var E=v?l?pi:li:l?on:V,b=_?i:E(n);return mn(b||n,(function(y,H){b&&(H=y,y=n[H]),se(f,H,An(y,t,e,H,n,o))})),f}function mc(n){var t=V(n);return function(e){return Bs(e,n,t)}}function Bs(n,t,e){var r=e.length;if(n==null)return!r;for(n=M(n);r--;){var s=e[r],o=t[s],f=n[s];if(f===i&&!(s in n)||!o(f))return!1}return!0}function Gs(n,t,e){if(typeof n!="function")throw new wn(D);return le((function(){n.apply(i,e)}),t)}function ue(n,t,e,r){var s=-1,o=Ee,f=!0,c=n.length,l=[],v=t.length;if(!c)return l;e&&(t=G(t,hn(e))),r?(o=Dr,f=!1):t.length>=w&&(o=jt,f=!1,t=new gt(t));n:for(;++s<c;){var _=n[s],m=e==null?_:e(_);if(_=r||_!==0?_:0,f&&m===m){for(var P=v;P--;)if(t[P]===m)continue n;l.push(_)}else o(t,m,r)||l.push(_)}return l}var rt=vu($n),zs=vu(Xr,!0);function wc(n,t){var e=!0;return rt(n,(function(r,s,o){return e=!!t(r,s,o),e})),e}function Ge(n,t,e){for(var r=-1,s=n.length;++r<s;){var o=n[r],f=t(o);if(f!=null&&(c===i?f===f&&!pn(f):e(f,c)))var c=f,l=o}return l}function Pc(n,t,e,r){var s=n.length;for(e=R(e),e<0&&(e=-e>s?0:s+e),r=r===i||r>s?s:R(r),r<0&&(r+=s),r=e>r?0:aa(r);e<r;)n[e++]=t;return n}function Ks(n,t){var e=[];return rt(n,(function(r,s,o){t(r,s,o)&&e.push(r)})),e}function j(n,t,e,r,s){var o=-1,f=n.length;for(e||(e=oh),s||(s=[]);++o<f;){var c=n[o];t>0&&e(c)?t>1?j(c,t-1,e,r,s):nt(s,c):r||(s[s.length]=c)}return s}var Jr=_u(),Ys=_u(!0);function $n(n,t){return n&&Jr(n,t,V)}function Xr(n,t){return n&&Ys(n,t,V)}function ze(n,t){return jn(t,(function(e){return Jn(n[e])}))}function _t(n,t){t=st(t,n);for(var e=0,r=t.length;n!=null&&e<r;)n=n[Wn(t[e++])];return e&&e==r?n:i}function Zs(n,t,e){var r=t(n);return O(n)?r:nt(r,e(n))}function en(n){return n==null?n===i?Za:Ka:pt&&pt in M(n)?eh(n):gh(n)}function Qr(n,t){return n>t}function Ac(n,t){return n!=null&&F.call(n,t)}function Cc(n,t){return n!=null&&t in M(n)}function Ic(n,t,e){return n>=nn(t,e)&&n<Q(t,e)}function Vr(n,t,e){for(var r=e?Dr:Ee,s=n[0].length,o=n.length,f=o,c=p(o),l=1/0,v=[];f--;){var _=n[f];f&&t&&(_=G(_,hn(t))),l=nn(_.length,l),c[f]=!e&&(t||s>=120&&_.length>=120)?new gt(f&&_):i}_=n[0];var m=-1,P=c[0];n:for(;++m<s&&v.length<l;){var I=_[m],E=t?t(I):I;if(I=e||I!==0?I:0,!(P?jt(P,E):r(v,E,e))){for(f=o;--f;){var b=c[f];if(!(b?jt(b,E):r(n[f],E,e)))continue n}P&&P.push(E),v.push(I)}}return v}function xc(n,t,e,r){return $n(n,(function(s,o,f){t(r,e(s),o,f)})),r}function ae(n,t,e){t=st(t,n),n=Hu(n,t);var r=n==null?n:n[Wn(In(t))];return r==null?i:cn(r,n,e)}function Js(n){return Y(n)&&en(n)==Ot}function Ec(n){return Y(n)&&en(n)==kt}function yc(n){return Y(n)&&en(n)==Zt}function oe(n,t,e,r,s){return n===t?!0:n==null||t==null||!Y(n)&&!Y(t)?n!==n&&t!==t:Sc(n,t,e,r,oe,s)}function Sc(n,t,e,r,s,o){var f=O(n),c=O(t),l=f?me:tn(n),v=c?me:tn(t);l=l==Ot?qn:l,v=v==Ot?qn:v;var _=l==qn,m=v==qn,P=l==v;if(P&&at(n)){if(!at(t))return!1;f=!0,_=!1}if(P&&!_)return o||(o=new Rn),f||Bt(n)?Su(n,t,e,r,s,o):nh(n,t,l,e,r,s,o);if(!(e&Et)){var I=_&&F.call(n,"__wrapped__"),E=m&&F.call(t,"__wrapped__");if(I||E){var b=I?n.value():n,y=E?t.value():t;return o||(o=new Rn),s(b,y,e,r,o)}}return P?(o||(o=new Rn),th(n,t,e,r,s,o)):!1}function Oc(n){return Y(n)&&tn(n)==yn}function kr(n,t,e,r){var s=e.length,o=s,f=!r;if(n==null)return!o;for(n=M(n);s--;){var c=e[s];if(f&&c[2]?c[1]!==n[c[0]]:!(c[0]in n))return!1}for(;++s<o;){c=e[s];var l=c[0],v=n[l],_=c[1];if(f&&c[2]){if(v===i&&!(l in n))return!1}else{var m=new Rn;if(r)var P=r(v,_,l,n,t,m);if(!(P===i?oe(_,v,Et|ve,r,m):P))return!1}}return!0}function Xs(n){if(!K(n)||ch(n))return!1;var t=Jn(n)?Of:_o;return t.test(wt(n))}function Rc(n){return Y(n)&&en(n)==Xt}function bc(n){return Y(n)&&tn(n)==Sn}function Tc(n){return Y(n)&&ar(n.length)&&!!B[en(n)]}function Qs(n){return typeof n=="function"?n:n==null?fn:typeof n=="object"?O(n)?js(n[0],n[1]):ks(n):ma(n)}function jr(n){if(!he(n))return Hf(n);var t=[];for(var e in M(n))F.call(n,e)&&e!="constructor"&&t.push(e);return t}function Lc(n){if(!K(n))return dh(n);var t=he(n),e=[];for(var r in n)r=="constructor"&&(t||!F.call(n,r))||e.push(r);return e}function ni(n,t){return n<t}function Vs(n,t){var e=-1,r=an(n)?p(n.length):[];return rt(n,(function(s,o,f){r[++e]=t(s,o,f)})),r}function ks(n){var t=gi(n);return t.length==1&&t[0][2]?Lu(t[0][0],t[0][1]):function(e){return e===n||kr(e,n,t)}}function js(n,t){return _i(n)&&Tu(t)?Lu(Wn(n),t):function(e){var r=Si(e,n);return r===i&&r===t?Oi(e,n):oe(t,r,Et|ve)}}function Ke(n,t,e,r,s){n!==t&&Jr(t,(function(o,f){if(s||(s=new Rn),K(o))Dc(n,t,f,e,Ke,r,s);else{var c=r?r(wi(n,f),o,f+"",n,t,s):i;c===i&&(c=o),Yr(n,f,c)}}),on)}function Dc(n,t,e,r,s,o,f){var c=wi(n,e),l=wi(t,e),v=f.get(l);if(v){Yr(n,e,v);return}var _=o?o(c,l,e+"",n,t,f):i,m=_===i;if(m){var P=O(l),I=!P&&at(l),E=!P&&!I&&Bt(l);_=l,P||I||E?O(c)?_=c:Z(c)?_=un(c):I?(m=!1,_=hu(l,!0)):E?(m=!1,_=lu(l,!0)):_=[]:pe(l)||Pt(l)?(_=c,Pt(c)?_=oa(c):(!K(c)||Jn(c))&&(_=bu(l))):m=!1}m&&(f.set(l,_),s(_,l,r,o,f),f.delete(l)),Yr(n,e,_)}function nu(n,t){var e=n.length;if(e)return t+=t<0?e:0,Zn(t,e)?n[t]:i}function tu(n,t,e){t.length?t=G(t,(function(o){return O(o)?function(f){return _t(f,o.length===1?o[0]:o)}:o})):t=[fn];var r=-1;t=G(t,hn(x()));var s=Vs(n,(function(o,f,c){var l=G(t,(function(v){return v(o)}));return{criteria:l,index:++r,value:o}}));return uf(s,(function(o,f){return Yc(o,f,e)}))}function Hc(n,t){return eu(n,t,(function(e,r){return Oi(n,r)}))}function eu(n,t,e){for(var r=-1,s=t.length,o={};++r<s;){var f=t[r],c=_t(n,f);e(c,f)&&fe(o,st(f,n),c)}return o}function Nc(n){return function(t){return _t(t,n)}}function ti(n,t,e,r){var s=r?sf:Tt,o=-1,f=t.length,c=n;for(n===t&&(t=un(t)),e&&(c=G(n,hn(e)));++o<f;)for(var l=0,v=t[o],_=e?e(v):v;(l=s(c,_,l,r))>-1;)c!==n&&Ne.call(c,l,1),Ne.call(n,l,1);return n}function ru(n,t){for(var e=n?t.length:0,r=e-1;e--;){var s=t[e];if(e==r||s!==o){var o=s;Zn(s)?Ne.call(n,s,1):si(n,s)}}return n}function ei(n,t){return n+We(Us()*(t-n+1))}function $c(n,t,e,r){for(var s=-1,o=Q(Ue((t-n)/(e||1)),0),f=p(o);o--;)f[r?o:++s]=n,n+=e;return f}function ri(n,t){var e="";if(!n||t<1||t>kn)return e;do{t%2&&(e+=n),t=We(t/2),t&&(n+=n)}while(t);return e}function T(n,t){return Pi(Du(n,t,fn),n+"")}function Uc(n){return Ms(Gt(n))}function Wc(n,t){var e=Gt(n);return tr(e,vt(t,0,e.length))}function fe(n,t,e,r){if(!K(n))return n;t=st(t,n);for(var s=-1,o=t.length,f=o-1,c=n;c!=null&&++s<o;){var l=Wn(t[s]),v=e;if(l==="__proto__"||l==="constructor"||l==="prototype")return n;if(s!=f){var _=c[l];v=r?r(_,l,c):i,v===i&&(v=K(_)?_:Zn(t[s+1])?[]:{})}se(c,l,v),c=c[l]}return n}var iu=Fe?function(n,t){return Fe.set(n,t),n}:fn,Fc=$e?function(n,t){return $e(n,"toString",{configurable:!0,enumerable:!1,value:bi(t),writable:!0})}:fn;function Mc(n){return tr(Gt(n))}function Cn(n,t,e){var r=-1,s=n.length;t<0&&(t=-t>s?0:s+t),e=e>s?s:e,e<0&&(e+=s),s=t>e?0:e-t>>>0,t>>>=0;for(var o=p(s);++r<s;)o[r]=n[r+t];return o}function qc(n,t){var e;return rt(n,(function(r,s,o){return e=t(r,s,o),!e})),!!e}function Ye(n,t,e){var r=0,s=n==null?r:n.length;if(typeof t=="number"&&t===t&&s<=qa){for(;r<s;){var o=r+s>>>1,f=n[o];f!==null&&!pn(f)&&(e?f<=t:f<t)?r=o+1:s=o}return s}return ii(n,t,fn,e)}function ii(n,t,e,r){var s=0,o=n==null?0:n.length;if(o===0)return 0;t=e(t);for(var f=t!==t,c=t===null,l=pn(t),v=t===i;s<o;){var _=We((s+o)/2),m=e(n[_]),P=m!==i,I=m===null,E=m===m,b=pn(m);if(f)var y=r||E;else v?y=E&&(r||P):c?y=E&&P&&(r||!I):l?y=E&&P&&!I&&(r||!b):I||b?y=!1:y=r?m<=t:m<t;y?s=_+1:o=_}return nn(o,Ma)}function su(n,t){for(var e=-1,r=n.length,s=0,o=[];++e<r;){var f=n[e],c=t?t(f):f;if(!e||!bn(c,l)){var l=c;o[s++]=f===0?0:f}}return o}function uu(n){return typeof n=="number"?n:pn(n)?_e:+n}function ln(n){if(typeof n=="string")return n;if(O(n))return G(n,ln)+"";if(pn(n))return Ws?Ws.call(n):"";var t=n+"";return t=="0"&&1/n==-ht?"-0":t}function it(n,t,e){var r=-1,s=Ee,o=n.length,f=!0,c=[],l=c;if(e)f=!1,s=Dr;else if(o>=w){var v=t?null:kc(n);if(v)return Se(v);f=!1,s=jt,l=new gt}else l=t?[]:c;n:for(;++r<o;){var _=n[r],m=t?t(_):_;if(_=e||_!==0?_:0,f&&m===m){for(var P=l.length;P--;)if(l[P]===m)continue n;t&&l.push(m),c.push(_)}else s(l,m,e)||(l!==c&&l.push(m),c.push(_))}return c}function si(n,t){return t=st(t,n),n=Hu(n,t),n==null||delete n[Wn(In(t))]}function au(n,t,e,r){return fe(n,t,e(_t(n,t)),r)}function Ze(n,t,e,r){for(var s=n.length,o=r?s:-1;(r?o--:++o<s)&&t(n[o],o,n););return e?Cn(n,r?0:o,r?o+1:s):Cn(n,r?o+1:0,r?s:o)}function ou(n,t){var e=n;return e instanceof N&&(e=e.value()),Hr(t,(function(r,s){return s.func.apply(s.thisArg,nt([r],s.args))}),e)}function ui(n,t,e){var r=n.length;if(r<2)return r?it(n[0]):[];for(var s=-1,o=p(r);++s<r;)for(var f=n[s],c=-1;++c<r;)c!=s&&(o[s]=ue(o[s]||f,n[c],t,e));return it(j(o,1),t,e)}function fu(n,t,e){for(var r=-1,s=n.length,o=t.length,f={};++r<s;){var c=r<o?t[r]:i;e(f,n[r],c)}return f}function ai(n){return Z(n)?n:[]}function oi(n){return typeof n=="function"?n:fn}function st(n,t){return O(n)?n:_i(n,t)?[n]:Wu(W(n))}var Bc=T;function ut(n,t,e){var r=n.length;return e=e===i?r:e,!t&&e>=r?n:Cn(n,t,e)}var cu=Rf||function(n){return k.clearTimeout(n)};function hu(n,t){if(t)return n.slice();var e=n.length,r=Ls?Ls(e):new n.constructor(e);return n.copy(r),r}function fi(n){var t=new n.constructor(n.byteLength);return new De(t).set(new De(n)),t}function Gc(n,t){var e=t?fi(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)}function zc(n){var t=new n.constructor(n.source,Ji.exec(n));return t.lastIndex=n.lastIndex,t}function Kc(n){return ie?M(ie.call(n)):{}}function lu(n,t){var e=t?fi(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}function pu(n,t){if(n!==t){var e=n!==i,r=n===null,s=n===n,o=pn(n),f=t!==i,c=t===null,l=t===t,v=pn(t);if(!c&&!v&&!o&&n>t||o&&f&&l&&!c&&!v||r&&f&&l||!e&&l||!s)return 1;if(!r&&!o&&!v&&n<t||v&&e&&s&&!r&&!o||c&&e&&s||!f&&s||!l)return-1}return 0}function Yc(n,t,e){for(var r=-1,s=n.criteria,o=t.criteria,f=s.length,c=e.length;++r<f;){var l=pu(s[r],o[r]);if(l){if(r>=c)return l;var v=e[r];return l*(v=="desc"?-1:1)}}return n.index-t.index}function du(n,t,e,r){for(var s=-1,o=n.length,f=e.length,c=-1,l=t.length,v=Q(o-f,0),_=p(l+v),m=!r;++c<l;)_[c]=t[c];for(;++s<f;)(m||s<o)&&(_[e[s]]=n[s]);for(;v--;)_[c++]=n[s++];return _}function gu(n,t,e,r){for(var s=-1,o=n.length,f=-1,c=e.length,l=-1,v=t.length,_=Q(o-c,0),m=p(_+v),P=!r;++s<_;)m[s]=n[s];for(var I=s;++l<v;)m[I+l]=t[l];for(;++f<c;)(P||s<o)&&(m[I+e[f]]=n[s++]);return m}function un(n,t){var e=-1,r=n.length;for(t||(t=p(r));++e<r;)t[e]=n[e];return t}function Un(n,t,e,r){var s=!e;e||(e={});for(var o=-1,f=t.length;++o<f;){var c=t[o],l=r?r(e[c],n[c],c,e,n):i;l===i&&(l=n[c]),s?zn(e,c,l):se(e,c,l)}return e}function Zc(n,t){return Un(n,vi(n),t)}function Jc(n,t){return Un(n,Ou(n),t)}function Je(n,t){return function(e,r){var s=O(e)?ko:vc,o=t?t():{};return s(e,n,x(r,2),o)}}function Ft(n){return T((function(t,e){var r=-1,s=e.length,o=s>1?e[s-1]:i,f=s>2?e[2]:i;for(o=n.length>3&&typeof o=="function"?(s--,o):i,f&&rn(e[0],e[1],f)&&(o=s<3?i:o,s=1),t=M(t);++r<s;){var c=e[r];c&&n(t,c,r,o)}return t}))}function vu(n,t){return function(e,r){if(e==null)return e;if(!an(e))return n(e,r);for(var s=e.length,o=t?s:-1,f=M(e);(t?o--:++o<s)&&r(f[o],o,f)!==!1;);return e}}function _u(n){return function(t,e,r){for(var s=-1,o=M(t),f=r(t),c=f.length;c--;){var l=f[n?c:++s];if(e(o[l],l,o)===!1)break}return t}}function Xc(n,t,e){var r=t&vn,s=ce(n);function o(){var f=this&&this!==k&&this instanceof o?s:n;return f.apply(r?e:this,arguments)}return o}function mu(n){return function(t){t=W(t);var e=Lt(t)?On(t):i,r=e?e[0]:t.charAt(0),s=e?ut(e,1).join(""):t.slice(1);return r[n]()+s}}function Mt(n){return function(t){return Hr(va(ga(t).replace(Wo,"")),n,"")}}function ce(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var e=Wt(n.prototype),r=n.apply(e,t);return K(r)?r:e}}function Qc(n,t,e){var r=ce(n);function s(){for(var o=arguments.length,f=p(o),c=o,l=qt(s);c--;)f[c]=arguments[c];var v=o<3&&f[0]!==l&&f[o-1]!==l?[]:tt(f,l);if(o-=v.length,o<e)return Iu(n,t,Xe,s.placeholder,i,f,v,i,i,e-o);var _=this&&this!==k&&this instanceof s?r:n;return cn(_,this,f)}return s}function wu(n){return function(t,e,r){var s=M(t);if(!an(t)){var o=x(e,3);t=V(t),e=function(c){return o(s[c],c,s)}}var f=n(t,e,r);return f>-1?s[o?t[f]:f]:i}}function Pu(n){return Yn((function(t){var e=t.length,r=e,s=Pn.prototype.thru;for(n&&t.reverse();r--;){var o=t[r];if(typeof o!="function")throw new wn(D);if(s&&!f&&je(o)=="wrapper")var f=new Pn([],!0)}for(r=f?r:e;++r<e;){o=t[r];var c=je(o),l=c=="wrapper"?di(o):i;l&&mi(l[0])&&l[1]==(Mn|Dn|Hn|Kt)&&!l[4].length&&l[9]==1?f=f[je(l[0])].apply(f,l[3]):f=o.length==1&&mi(o)?f[c]():f.thru(o)}return function(){var v=arguments,_=v[0];if(f&&v.length==1&&O(_))return f.plant(_).value();for(var m=0,P=e?t[m].apply(this,v):_;++m<e;)P=t[m].call(this,P);return P}}))}function Xe(n,t,e,r,s,o,f,c,l,v){var _=t&Mn,m=t&vn,P=t&ct,I=t&(Dn|yt),E=t&dr,b=P?i:ce(n);function y(){for(var H=arguments.length,$=p(H),dn=H;dn--;)$[dn]=arguments[dn];if(I)var sn=qt(y),gn=of($,sn);if(r&&($=du($,r,s,I)),o&&($=gu($,o,f,I)),H-=gn,I&&H<v){var J=tt($,sn);return Iu(n,t,Xe,y.placeholder,e,$,J,c,l,v-H)}var Tn=m?e:this,Qn=P?Tn[n]:n;return H=$.length,c?$=vh($,c):E&&H>1&&$.reverse(),_&&l<H&&($.length=l),this&&this!==k&&this instanceof y&&(Qn=b||ce(Qn)),Qn.apply(Tn,$)}return y}function Au(n,t){return function(e,r){return xc(e,n,t(r),{})}}function Qe(n,t){return function(e,r){var s;if(e===i&&r===i)return t;if(e!==i&&(s=e),r!==i){if(s===i)return r;typeof e=="string"||typeof r=="string"?(e=ln(e),r=ln(r)):(e=uu(e),r=uu(r)),s=n(e,r)}return s}}function ci(n){return Yn((function(t){return t=G(t,hn(x())),T((function(e){var r=this;return n(t,(function(s){return cn(s,r,e)}))}))}))}function Ve(n,t){t=t===i?" ":ln(t);var e=t.length;if(e<2)return e?ri(t,n):t;var r=ri(t,Ue(n/Dt(t)));return Lt(t)?ut(On(r),0,n).join(""):r.slice(0,n)}function Vc(n,t,e,r){var s=t&vn,o=ce(n);function f(){for(var c=-1,l=arguments.length,v=-1,_=r.length,m=p(_+l),P=this&&this!==k&&this instanceof f?o:n;++v<_;)m[v]=r[v];for(;l--;)m[v++]=arguments[++c];return cn(P,s?e:this,m)}return f}function Cu(n){return function(t,e,r){return r&&typeof r!="number"&&rn(t,e,r)&&(e=r=i),t=Xn(t),e===i?(e=t,t=0):e=Xn(e),r=r===i?t<e?1:-1:Xn(r),$c(t,e,r,n)}}function ke(n){return function(t,e){return typeof t=="string"&&typeof e=="string"||(t=xn(t),e=xn(e)),n(t,e)}}function Iu(n,t,e,r,s,o,f,c,l,v){var _=t&Dn,m=_?f:i,P=_?i:f,I=_?o:i,E=_?i:o;t|=_?Hn:St,t&=~(_?St:Hn),t&qi||(t&=~(vn|ct));var b=[n,t,s,I,m,E,P,c,l,v],y=e.apply(i,b);return mi(n)&&Nu(y,b),y.placeholder=r,$u(y,n,t)}function hi(n){var t=X[n];return function(e,r){if(e=xn(e),r=r==null?0:nn(R(r),292),r&&$s(e)){var s=(W(e)+"e").split("e"),o=t(s[0]+"e"+(+s[1]+r));return s=(W(o)+"e").split("e"),+(s[0]+"e"+(+s[1]-r))}return t(e)}}var kc=$t&&1/Se(new $t([,-0]))[1]==ht?function(n){return new $t(n)}:Di;function xu(n){return function(t){var e=tn(t);return e==yn?qr(t):e==Sn?gf(t):af(t,n(t))}}function Kn(n,t,e,r,s,o,f,c){var l=t&ct;if(!l&&typeof n!="function")throw new wn(D);var v=r?r.length:0;if(v||(t&=~(Hn|St),r=s=i),f=f===i?f:Q(R(f),0),c=c===i?c:R(c),v-=s?s.length:0,t&St){var _=r,m=s;r=s=i}var P=l?i:di(n),I=[n,t,e,r,s,_,m,o,f,c];if(P&&ph(I,P),n=I[0],t=I[1],e=I[2],r=I[3],s=I[4],c=I[9]=I[9]===i?l?0:n.length:Q(I[9]-v,0),!c&&t&(Dn|yt)&&(t&=~(Dn|yt)),!t||t==vn)var E=Xc(n,t,e);else t==Dn||t==yt?E=Qc(n,t,c):(t==Hn||t==(vn|Hn))&&!s.length?E=Vc(n,t,e,r):E=Xe.apply(i,I);var b=P?iu:Nu;return $u(b(E,I),n,t)}function Eu(n,t,e,r){return n===i||bn(n,Nt[e])&&!F.call(r,e)?t:n}function yu(n,t,e,r,s,o){return K(n)&&K(t)&&(o.set(t,n),Ke(n,t,i,yu,o),o.delete(t)),n}function jc(n){return pe(n)?i:n}function Su(n,t,e,r,s,o){var f=e&Et,c=n.length,l=t.length;if(c!=l&&!(f&&l>c))return!1;var v=o.get(n),_=o.get(t);if(v&&_)return v==t&&_==n;var m=-1,P=!0,I=e&ve?new gt:i;for(o.set(n,t),o.set(t,n);++m<c;){var E=n[m],b=t[m];if(r)var y=f?r(b,E,m,t,n,o):r(E,b,m,n,t,o);if(y!==i){if(y)continue;P=!1;break}if(I){if(!Nr(t,(function(H,$){if(!jt(I,$)&&(E===H||s(E,H,e,r,o)))return I.push($)}))){P=!1;break}}else if(!(E===b||s(E,b,e,r,o))){P=!1;break}}return o.delete(n),o.delete(t),P}function nh(n,t,e,r,s,o,f){switch(e){case Rt:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case kt:return!(n.byteLength!=t.byteLength||!o(new De(n),new De(t)));case Yt:case Zt:case Jt:return bn(+n,+t);case we:return n.name==t.name&&n.message==t.message;case Xt:case Qt:return n==t+"";case yn:var c=qr;case Sn:var l=r&Et;if(c||(c=Se),n.size!=t.size&&!l)return!1;var v=f.get(n);if(v)return v==t;r|=ve,f.set(n,t);var _=Su(c(n),c(t),r,s,o,f);return f.delete(n),_;case Ae:if(ie)return ie.call(n)==ie.call(t)}return!1}function th(n,t,e,r,s,o){var f=e&Et,c=li(n),l=c.length,v=li(t),_=v.length;if(l!=_&&!f)return!1;for(var m=l;m--;){var P=c[m];if(!(f?P in t:F.call(t,P)))return!1}var I=o.get(n),E=o.get(t);if(I&&E)return I==t&&E==n;var b=!0;o.set(n,t),o.set(t,n);for(var y=f;++m<l;){P=c[m];var H=n[P],$=t[P];if(r)var dn=f?r($,H,P,t,n,o):r(H,$,P,n,t,o);if(!(dn===i?H===$||s(H,$,e,r,o):dn)){b=!1;break}y||(y=P=="constructor")}if(b&&!y){var sn=n.constructor,gn=t.constructor;sn!=gn&&"constructor"in n&&"constructor"in t&&!(typeof sn=="function"&&sn instanceof sn&&typeof gn=="function"&&gn instanceof gn)&&(b=!1)}return o.delete(n),o.delete(t),b}function Yn(n){return Pi(Du(n,i,Bu),n+"")}function li(n){return Zs(n,V,vi)}function pi(n){return Zs(n,on,Ou)}var di=Fe?function(n){return Fe.get(n)}:Di;function je(n){for(var t=n.name+"",e=Ut[t],r=F.call(Ut,t)?e.length:0;r--;){var s=e[r],o=s.func;if(o==null||o==n)return s.name}return t}function qt(n){var t=F.call(a,"placeholder")?a:n;return t.placeholder}function x(){var n=a.iteratee||Ti;return n=n===Ti?Qs:n,arguments.length?n(arguments[0],arguments[1]):n}function nr(n,t){var e=n.__data__;return fh(t)?e[typeof t=="string"?"string":"hash"]:e.map}function gi(n){for(var t=V(n),e=t.length;e--;){var r=t[e],s=n[r];t[e]=[r,s,Tu(s)]}return t}function mt(n,t){var e=lf(n,t);return Xs(e)?e:i}function eh(n){var t=F.call(n,pt),e=n[pt];try{n[pt]=i;var r=!0}catch{}var s=Te.call(n);return r&&(t?n[pt]=e:delete n[pt]),s}var vi=Gr?function(n){return n==null?[]:(n=M(n),jn(Gr(n),(function(t){return Hs.call(n,t)})))}:Hi,Ou=Gr?function(n){for(var t=[];n;)nt(t,vi(n)),n=He(n);return t}:Hi,tn=en;(zr&&tn(new zr(new ArrayBuffer(1)))!=Rt||te&&tn(new te)!=yn||Kr&&tn(Kr.resolve())!=zi||$t&&tn(new $t)!=Sn||ee&&tn(new ee)!=Vt)&&(tn=function(n){var t=en(n),e=t==qn?n.constructor:i,r=e?wt(e):"";if(r)switch(r){case Wf:return Rt;case Ff:return yn;case Mf:return zi;case qf:return Sn;case Bf:return Vt}return t});function rh(n,t,e){for(var r=-1,s=e.length;++r<s;){var o=e[r],f=o.size;switch(o.type){case"drop":n+=f;break;case"dropRight":t-=f;break;case"take":t=nn(t,n+f);break;case"takeRight":n=Q(n,t-f);break}}return{start:n,end:t}}function ih(n){var t=n.match(oo);return t?t[1].split(fo):[]}function Ru(n,t,e){t=st(t,n);for(var r=-1,s=t.length,o=!1;++r<s;){var f=Wn(t[r]);if(!(o=n!=null&&e(n,f)))break;n=n[f]}return o||++r!=s?o:(s=n==null?0:n.length,!!s&&ar(s)&&Zn(f,s)&&(O(n)||Pt(n)))}function sh(n){var t=n.length,e=new n.constructor(t);return t&&typeof n[0]=="string"&&F.call(n,"index")&&(e.index=n.index,e.input=n.input),e}function bu(n){return typeof n.constructor=="function"&&!he(n)?Wt(He(n)):{}}function uh(n,t,e){var r=n.constructor;switch(t){case kt:return fi(n);case Yt:case Zt:return new r(+n);case Rt:return Gc(n,e);case gr:case vr:case _r:case mr:case wr:case Pr:case Ar:case Cr:case Ir:return lu(n,e);case yn:return new r;case Jt:case Qt:return new r(n);case Xt:return zc(n);case Sn:return new r;case Ae:return Kc(n)}}function ah(n,t){var e=t.length;if(!e)return n;var r=e-1;return t[r]=(e>1?"& ":"")+t[r],t=t.join(e>2?", ":" "),n.replace(ao,`{\n/* [wrapped with `+t+`] */\n`)}function oh(n){return O(n)||Pt(n)||!!(Ns&&n&&n[Ns])}function Zn(n,t){var e=typeof n;return t=t??kn,!!t&&(e=="number"||e!="symbol"&&wo.test(n))&&n>-1&&n%1==0&&n<t}function rn(n,t,e){if(!K(e))return!1;var r=typeof t;return(r=="number"?an(e)&&Zn(t,e.length):r=="string"&&t in e)?bn(e[t],n):!1}function _i(n,t){if(O(n))return!1;var e=typeof n;return e=="number"||e=="symbol"||e=="boolean"||n==null||pn(n)?!0:ro.test(n)||!eo.test(n)||t!=null&&n in M(t)}function fh(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function mi(n){var t=je(n),e=a[t];if(typeof e!="function"||!(t in N.prototype))return!1;if(n===e)return!0;var r=di(e);return!!r&&n===r[0]}function ch(n){return!!Ts&&Ts in n}var hh=Re?Jn:Ni;function he(n){var t=n&&n.constructor,e=typeof t=="function"&&t.prototype||Nt;return n===e}function Tu(n){return n===n&&!K(n)}function Lu(n,t){return function(e){return e==null?!1:e[n]===t&&(t!==i||n in M(e))}}function lh(n){var t=sr(n,(function(r){return e.size===pr&&e.clear(),r})),e=t.cache;return t}function ph(n,t){var e=n[1],r=t[1],s=e|r,o=s<(vn|ct|Mn),f=r==Mn&&e==Dn||r==Mn&&e==Kt&&n[7].length<=t[8]||r==(Mn|Kt)&&t[7].length<=t[8]&&e==Dn;if(!(o||f))return n;r&vn&&(n[2]=t[2],s|=e&vn?0:qi);var c=t[3];if(c){var l=n[3];n[3]=l?du(l,c,t[4]):c,n[4]=l?tt(n[3],It):t[4]}return c=t[5],c&&(l=n[5],n[5]=l?gu(l,c,t[6]):c,n[6]=l?tt(n[5],It):t[6]),c=t[7],c&&(n[7]=c),r&Mn&&(n[8]=n[8]==null?t[8]:nn(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=s,n}function dh(n){var t=[];if(n!=null)for(var e in M(n))t.push(e);return t}function gh(n){return Te.call(n)}function Du(n,t,e){return t=Q(t===i?n.length-1:t,0),function(){for(var r=arguments,s=-1,o=Q(r.length-t,0),f=p(o);++s<o;)f[s]=r[t+s];s=-1;for(var c=p(t+1);++s<t;)c[s]=r[s];return c[t]=e(f),cn(n,this,c)}}function Hu(n,t){return t.length<2?n:_t(n,Cn(t,0,-1))}function vh(n,t){for(var e=n.length,r=nn(t.length,e),s=un(n);r--;){var o=t[r];n[r]=Zn(o,e)?s[o]:i}return n}function wi(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var Nu=Uu(iu),le=Tf||function(n,t){return k.setTimeout(n,t)},Pi=Uu(Fc);function $u(n,t,e){var r=t+"";return Pi(n,ah(r,_h(ih(r),e)))}function Uu(n){var t=0,e=0;return function(){var r=Nf(),s=$a-(r-e);if(e=r,s>0){if(++t>=Na)return arguments[0]}else t=0;return n.apply(i,arguments)}}function tr(n,t){var e=-1,r=n.length,s=r-1;for(t=t===i?r:t;++e<t;){var o=ei(e,s),f=n[o];n[o]=n[e],n[e]=f}return n.length=t,n}var Wu=lh((function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(io,(function(e,r,s,o){t.push(s?o.replace(lo,"$1"):r||e)})),t}));function Wn(n){if(typeof n=="string"||pn(n))return n;var t=n+"";return t=="0"&&1/n==-ht?"-0":t}function wt(n){if(n!=null){try{return be.call(n)}catch{}try{return n+""}catch{}}return""}function _h(n,t){return mn(Ba,(function(e){var r="_."+e[0];t&e[1]&&!Ee(n,r)&&n.push(r)})),n.sort()}function Fu(n){if(n instanceof N)return n.clone();var t=new Pn(n.__wrapped__,n.__chain__);return t.__actions__=un(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function mh(n,t,e){(e?rn(n,t,e):t===i)?t=1:t=Q(R(t),0);var r=n==null?0:n.length;if(!r||t<1)return[];for(var s=0,o=0,f=p(Ue(r/t));s<r;)f[o++]=Cn(n,s,s+=t);return f}function wh(n){for(var t=-1,e=n==null?0:n.length,r=0,s=[];++t<e;){var o=n[t];o&&(s[r++]=o)}return s}function Ph(){var n=arguments.length;if(!n)return[];for(var t=p(n-1),e=arguments[0],r=n;r--;)t[r-1]=arguments[r];return nt(O(e)?un(e):[e],j(t,1))}var Ah=T((function(n,t){return Z(n)?ue(n,j(t,1,Z,!0)):[]})),Ch=T((function(n,t){var e=In(t);return Z(e)&&(e=i),Z(n)?ue(n,j(t,1,Z,!0),x(e,2)):[]})),Ih=T((function(n,t){var e=In(t);return Z(e)&&(e=i),Z(n)?ue(n,j(t,1,Z,!0),i,e):[]}));function xh(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===i?1:R(t),Cn(n,t<0?0:t,r)):[]}function Eh(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===i?1:R(t),t=r-t,Cn(n,0,t<0?0:t)):[]}function yh(n,t){return n&&n.length?Ze(n,x(t,3),!0,!0):[]}function Sh(n,t){return n&&n.length?Ze(n,x(t,3),!0):[]}function Oh(n,t,e,r){var s=n==null?0:n.length;return s?(e&&typeof e!="number"&&rn(n,t,e)&&(e=0,r=s),Pc(n,t,e,r)):[]}function Mu(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=e==null?0:R(e);return s<0&&(s=Q(r+s,0)),ye(n,x(t,3),s)}function qu(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=r-1;return e!==i&&(s=R(e),s=e<0?Q(r+s,0):nn(s,r-1)),ye(n,x(t,3),s,!0)}function Bu(n){var t=n==null?0:n.length;return t?j(n,1):[]}function Rh(n){var t=n==null?0:n.length;return t?j(n,ht):[]}function bh(n,t){var e=n==null?0:n.length;return e?(t=t===i?1:R(t),j(n,t)):[]}function Th(n){for(var t=-1,e=n==null?0:n.length,r={};++t<e;){var s=n[t];r[s[0]]=s[1]}return r}function Gu(n){return n&&n.length?n[0]:i}function Lh(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=e==null?0:R(e);return s<0&&(s=Q(r+s,0)),Tt(n,t,s)}function Dh(n){var t=n==null?0:n.length;return t?Cn(n,0,-1):[]}var Hh=T((function(n){var t=G(n,ai);return t.length&&t[0]===n[0]?Vr(t):[]})),Nh=T((function(n){var t=In(n),e=G(n,ai);return t===In(e)?t=i:e.pop(),e.length&&e[0]===n[0]?Vr(e,x(t,2)):[]})),$h=T((function(n){var t=In(n),e=G(n,ai);return t=typeof t=="function"?t:i,t&&e.pop(),e.length&&e[0]===n[0]?Vr(e,i,t):[]}));function Uh(n,t){return n==null?"":Df.call(n,t)}function In(n){var t=n==null?0:n.length;return t?n[t-1]:i}function Wh(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=r;return e!==i&&(s=R(e),s=s<0?Q(r+s,0):nn(s,r-1)),t===t?_f(n,t,s):ye(n,Is,s,!0)}function Fh(n,t){return n&&n.length?nu(n,R(t)):i}var Mh=T(zu);function zu(n,t){return n&&n.length&&t&&t.length?ti(n,t):n}function qh(n,t,e){return n&&n.length&&t&&t.length?ti(n,t,x(e,2)):n}function Bh(n,t,e){return n&&n.length&&t&&t.length?ti(n,t,i,e):n}var Gh=Yn((function(n,t){var e=n==null?0:n.length,r=Zr(n,t);return ru(n,G(t,(function(s){return Zn(s,e)?+s:s})).sort(pu)),r}));function zh(n,t){var e=[];if(!(n&&n.length))return e;var r=-1,s=[],o=n.length;for(t=x(t,3);++r<o;){var f=n[r];t(f,r,n)&&(e.push(f),s.push(r))}return ru(n,s),e}function Ai(n){return n==null?n:Uf.call(n)}function Kh(n,t,e){var r=n==null?0:n.length;return r?(e&&typeof e!="number"&&rn(n,t,e)?(t=0,e=r):(t=t==null?0:R(t),e=e===i?r:R(e)),Cn(n,t,e)):[]}function Yh(n,t){return Ye(n,t)}function Zh(n,t,e){return ii(n,t,x(e,2))}function Jh(n,t){var e=n==null?0:n.length;if(e){var r=Ye(n,t);if(r<e&&bn(n[r],t))return r}return-1}function Xh(n,t){return Ye(n,t,!0)}function Qh(n,t,e){return ii(n,t,x(e,2),!0)}function Vh(n,t){var e=n==null?0:n.length;if(e){var r=Ye(n,t,!0)-1;if(bn(n[r],t))return r}return-1}function kh(n){return n&&n.length?su(n):[]}function jh(n,t){return n&&n.length?su(n,x(t,2)):[]}function nl(n){var t=n==null?0:n.length;return t?Cn(n,1,t):[]}function tl(n,t,e){return n&&n.length?(t=e||t===i?1:R(t),Cn(n,0,t<0?0:t)):[]}function el(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===i?1:R(t),t=r-t,Cn(n,t<0?0:t,r)):[]}function rl(n,t){return n&&n.length?Ze(n,x(t,3),!1,!0):[]}function il(n,t){return n&&n.length?Ze(n,x(t,3)):[]}var sl=T((function(n){return it(j(n,1,Z,!0))})),ul=T((function(n){var t=In(n);return Z(t)&&(t=i),it(j(n,1,Z,!0),x(t,2))})),al=T((function(n){var t=In(n);return t=typeof t=="function"?t:i,it(j(n,1,Z,!0),i,t)}));function ol(n){return n&&n.length?it(n):[]}function fl(n,t){return n&&n.length?it(n,x(t,2)):[]}function cl(n,t){return t=typeof t=="function"?t:i,n&&n.length?it(n,i,t):[]}function Ci(n){if(!(n&&n.length))return[];var t=0;return n=jn(n,(function(e){if(Z(e))return t=Q(e.length,t),!0})),Fr(t,(function(e){return G(n,$r(e))}))}function Ku(n,t){if(!(n&&n.length))return[];var e=Ci(n);return t==null?e:G(e,(function(r){return cn(t,i,r)}))}var hl=T((function(n,t){return Z(n)?ue(n,t):[]})),ll=T((function(n){return ui(jn(n,Z))})),pl=T((function(n){var t=In(n);return Z(t)&&(t=i),ui(jn(n,Z),x(t,2))})),dl=T((function(n){var t=In(n);return t=typeof t=="function"?t:i,ui(jn(n,Z),i,t)})),gl=T(Ci);function vl(n,t){return fu(n||[],t||[],se)}function _l(n,t){return fu(n||[],t||[],fe)}var ml=T((function(n){var t=n.length,e=t>1?n[t-1]:i;return e=typeof e=="function"?(n.pop(),e):i,Ku(n,e)}));function Yu(n){var t=a(n);return t.__chain__=!0,t}function wl(n,t){return t(n),n}function er(n,t){return t(n)}var Pl=Yn((function(n){var t=n.length,e=t?n[0]:0,r=this.__wrapped__,s=function(o){return Zr(o,n)};return t>1||this.__actions__.length||!(r instanceof N)||!Zn(e)?this.thru(s):(r=r.slice(e,+e+(t?1:0)),r.__actions__.push({func:er,args:[s],thisArg:i}),new Pn(r,this.__chain__).thru((function(o){return t&&!o.length&&o.push(i),o})))}));function Al(){return Yu(this)}function Cl(){return new Pn(this.value(),this.__chain__)}function Il(){this.__values__===i&&(this.__values__=ua(this.value()));var n=this.__index__>=this.__values__.length,t=n?i:this.__values__[this.__index__++];return{done:n,value:t}}function xl(){return this}function El(n){for(var t,e=this;e instanceof qe;){var r=Fu(e);r.__index__=0,r.__values__=i,t?s.__wrapped__=r:t=r;var s=r;e=e.__wrapped__}return s.__wrapped__=n,t}function yl(){var n=this.__wrapped__;if(n instanceof N){var t=n;return this.__actions__.length&&(t=new N(this)),t=t.reverse(),t.__actions__.push({func:er,args:[Ai],thisArg:i}),new Pn(t,this.__chain__)}return this.thru(Ai)}function Sl(){return ou(this.__wrapped__,this.__actions__)}var Ol=Je((function(n,t,e){F.call(n,e)?++n[e]:zn(n,e,1)}));function Rl(n,t,e){var r=O(n)?As:wc;return e&&rn(n,t,e)&&(t=i),r(n,x(t,3))}function bl(n,t){var e=O(n)?jn:Ks;return e(n,x(t,3))}var Tl=wu(Mu),Ll=wu(qu);function Dl(n,t){return j(rr(n,t),1)}function Hl(n,t){return j(rr(n,t),ht)}function Nl(n,t,e){return e=e===i?1:R(e),j(rr(n,t),e)}function Zu(n,t){var e=O(n)?mn:rt;return e(n,x(t,3))}function Ju(n,t){var e=O(n)?jo:zs;return e(n,x(t,3))}var $l=Je((function(n,t,e){F.call(n,e)?n[e].push(t):zn(n,e,[t])}));function Ul(n,t,e,r){n=an(n)?n:Gt(n),e=e&&!r?R(e):0;var s=n.length;return e<0&&(e=Q(s+e,0)),or(n)?e<=s&&n.indexOf(t,e)>-1:!!s&&Tt(n,t,e)>-1}var Wl=T((function(n,t,e){var r=-1,s=typeof t=="function",o=an(n)?p(n.length):[];return rt(n,(function(f){o[++r]=s?cn(t,f,e):ae(f,t,e)})),o})),Fl=Je((function(n,t,e){zn(n,e,t)}));function rr(n,t){var e=O(n)?G:Vs;return e(n,x(t,3))}function Ml(n,t,e,r){return n==null?[]:(O(t)||(t=t==null?[]:[t]),e=r?i:e,O(e)||(e=e==null?[]:[e]),tu(n,t,e))}var ql=Je((function(n,t,e){n[e?0:1].push(t)}),(function(){return[[],[]]}));function Bl(n,t,e){var r=O(n)?Hr:Es,s=arguments.length<3;return r(n,x(t,4),e,s,rt)}function Gl(n,t,e){var r=O(n)?nf:Es,s=arguments.length<3;return r(n,x(t,4),e,s,zs)}function zl(n,t){var e=O(n)?jn:Ks;return e(n,ur(x(t,3)))}function Kl(n){var t=O(n)?Ms:Uc;return t(n)}function Yl(n,t,e){(e?rn(n,t,e):t===i)?t=1:t=R(t);var r=O(n)?dc:Wc;return r(n,t)}function Zl(n){var t=O(n)?gc:Mc;return t(n)}function Jl(n){if(n==null)return 0;if(an(n))return or(n)?Dt(n):n.length;var t=tn(n);return t==yn||t==Sn?n.size:jr(n).length}function Xl(n,t,e){var r=O(n)?Nr:qc;return e&&rn(n,t,e)&&(t=i),r(n,x(t,3))}var Ql=T((function(n,t){if(n==null)return[];var e=t.length;return e>1&&rn(n,t[0],t[1])?t=[]:e>2&&rn(t[0],t[1],t[2])&&(t=[t[0]]),tu(n,j(t,1),[])})),ir=bf||function(){return k.Date.now()};function Vl(n,t){if(typeof t!="function")throw new wn(D);return n=R(n),function(){if(--n<1)return t.apply(this,arguments)}}function Xu(n,t,e){return t=e?i:t,t=n&&t==null?n.length:t,Kn(n,Mn,i,i,i,i,t)}function Qu(n,t){var e;if(typeof t!="function")throw new wn(D);return n=R(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=i),e}}var Ii=T((function(n,t,e){var r=vn;if(e.length){var s=tt(e,qt(Ii));r|=Hn}return Kn(n,r,t,e,s)})),Vu=T((function(n,t,e){var r=vn|ct;if(e.length){var s=tt(e,qt(Vu));r|=Hn}return Kn(t,r,n,e,s)}));function ku(n,t,e){t=e?i:t;var r=Kn(n,Dn,i,i,i,i,i,t);return r.placeholder=ku.placeholder,r}function ju(n,t,e){t=e?i:t;var r=Kn(n,yt,i,i,i,i,i,t);return r.placeholder=ju.placeholder,r}function na(n,t,e){var r,s,o,f,c,l,v=0,_=!1,m=!1,P=!0;if(typeof n!="function")throw new wn(D);t=xn(t)||0,K(e)&&(_=!!e.leading,m="maxWait"in e,o=m?Q(xn(e.maxWait)||0,t):o,P="trailing"in e?!!e.trailing:P);function I(J){var Tn=r,Qn=s;return r=s=i,v=J,f=n.apply(Qn,Tn),f}function E(J){return v=J,c=le(H,t),_?I(J):f}function b(J){var Tn=J-l,Qn=J-v,wa=t-Tn;return m?nn(wa,o-Qn):wa}function y(J){var Tn=J-l,Qn=J-v;return l===i||Tn>=t||Tn<0||m&&Qn>=o}function H(){var J=ir();if(y(J))return $(J);c=le(H,b(J))}function $(J){return c=i,P&&r?I(J):(r=s=i,f)}function dn(){c!==i&&cu(c),v=0,r=l=s=c=i}function sn(){return c===i?f:$(ir())}function gn(){var J=ir(),Tn=y(J);if(r=arguments,s=this,l=J,Tn){if(c===i)return E(l);if(m)return cu(c),c=le(H,t),I(l)}return c===i&&(c=le(H,t)),f}return gn.cancel=dn,gn.flush=sn,gn}var kl=T((function(n,t){return Gs(n,1,t)})),jl=T((function(n,t,e){return Gs(n,xn(t)||0,e)}));function np(n){return Kn(n,dr)}function sr(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new wn(D);var e=function(){var r=arguments,s=t?t.apply(this,r):r[0],o=e.cache;if(o.has(s))return o.get(s);var f=n.apply(this,r);return e.cache=o.set(s,f)||o,f};return e.cache=new(sr.Cache||Gn),e}sr.Cache=Gn;function ur(n){if(typeof n!="function")throw new wn(D);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function tp(n){return Qu(2,n)}var ep=Bc((function(n,t){t=t.length==1&&O(t[0])?G(t[0],hn(x())):G(j(t,1),hn(x()));var e=t.length;return T((function(r){for(var s=-1,o=nn(r.length,e);++s<o;)r[s]=t[s].call(this,r[s]);return cn(n,this,r)}))})),xi=T((function(n,t){var e=tt(t,qt(xi));return Kn(n,Hn,i,t,e)})),ta=T((function(n,t){var e=tt(t,qt(ta));return Kn(n,St,i,t,e)})),rp=Yn((function(n,t){return Kn(n,Kt,i,i,i,t)}));function ip(n,t){if(typeof n!="function")throw new wn(D);return t=t===i?t:R(t),T(n,t)}function sp(n,t){if(typeof n!="function")throw new wn(D);return t=t==null?0:Q(R(t),0),T((function(e){var r=e[t],s=ut(e,0,t);return r&&nt(s,r),cn(n,this,s)}))}function up(n,t,e){var r=!0,s=!0;if(typeof n!="function")throw new wn(D);return K(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),na(n,t,{leading:r,maxWait:t,trailing:s})}function ap(n){return Xu(n,1)}function op(n,t){return xi(oi(t),n)}function fp(){if(!arguments.length)return[];var n=arguments[0];return O(n)?n:[n]}function cp(n){return An(n,xt)}function hp(n,t){return t=typeof t=="function"?t:i,An(n,xt,t)}function lp(n){return An(n,Ln|xt)}function pp(n,t){return t=typeof t=="function"?t:i,An(n,Ln|xt,t)}function dp(n,t){return t==null||Bs(n,t,V(t))}function bn(n,t){return n===t||n!==n&&t!==t}var gp=ke(Qr),vp=ke((function(n,t){return n>=t})),Pt=Js(function(){return arguments}())?Js:function(n){return Y(n)&&F.call(n,"callee")&&!Hs.call(n,"callee")},O=p.isArray,_p=gs?hn(gs):Ec;function an(n){return n!=null&&ar(n.length)&&!Jn(n)}function Z(n){return Y(n)&&an(n)}function mp(n){return n===!0||n===!1||Y(n)&&en(n)==Yt}var at=Lf||Ni,wp=vs?hn(vs):yc;function Pp(n){return Y(n)&&n.nodeType===1&&!pe(n)}function Ap(n){if(n==null)return!0;if(an(n)&&(O(n)||typeof n=="string"||typeof n.splice=="function"||at(n)||Bt(n)||Pt(n)))return!n.length;var t=tn(n);if(t==yn||t==Sn)return!n.size;if(he(n))return!jr(n).length;for(var e in n)if(F.call(n,e))return!1;return!0}function Cp(n,t){return oe(n,t)}function Ip(n,t,e){e=typeof e=="function"?e:i;var r=e?e(n,t):i;return r===i?oe(n,t,i,e):!!r}function Ei(n){if(!Y(n))return!1;var t=en(n);return t==we||t==za||typeof n.message=="string"&&typeof n.name=="string"&&!pe(n)}function xp(n){return typeof n=="number"&&$s(n)}function Jn(n){if(!K(n))return!1;var t=en(n);return t==Pe||t==Gi||t==Ga||t==Ya}function ea(n){return typeof n=="number"&&n==R(n)}function ar(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=kn}function K(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function Y(n){return n!=null&&typeof n=="object"}var ra=_s?hn(_s):Oc;function Ep(n,t){return n===t||kr(n,t,gi(t))}function yp(n,t,e){return e=typeof e=="function"?e:i,kr(n,t,gi(t),e)}function Sp(n){return ia(n)&&n!=+n}function Op(n){if(hh(n))throw new S(L);return Xs(n)}function Rp(n){return n===null}function bp(n){return n==null}function ia(n){return typeof n=="number"||Y(n)&&en(n)==Jt}function pe(n){if(!Y(n)||en(n)!=qn)return!1;var t=He(n);if(t===null)return!0;var e=F.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&be.call(e)==yf}var yi=ms?hn(ms):Rc;function Tp(n){return ea(n)&&n>=-kn&&n<=kn}var sa=ws?hn(ws):bc;function or(n){return typeof n=="string"||!O(n)&&Y(n)&&en(n)==Qt}function pn(n){return typeof n=="symbol"||Y(n)&&en(n)==Ae}var Bt=Ps?hn(Ps):Tc;function Lp(n){return n===i}function Dp(n){return Y(n)&&tn(n)==Vt}function Hp(n){return Y(n)&&en(n)==Ja}var Np=ke(ni),$p=ke((function(n,t){return n<=t}));function ua(n){if(!n)return[];if(an(n))return or(n)?On(n):un(n);if(ne&&n[ne])return df(n[ne]());var t=tn(n),e=t==yn?qr:t==Sn?Se:Gt;return e(n)}function Xn(n){if(!n)return n===0?n:0;if(n=xn(n),n===ht||n===-ht){var t=n<0?-1:1;return t*Fa}return n===n?n:0}function R(n){var t=Xn(n),e=t%1;return t===t?e?t-e:t:0}function aa(n){return n?vt(R(n),0,Nn):0}function xn(n){if(typeof n=="number")return n;if(pn(n))return _e;if(K(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=K(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=ys(n);var e=vo.test(n);return e||mo.test(n)?Qo(n.slice(2),e?2:8):go.test(n)?_e:+n}function oa(n){return Un(n,on(n))}function Up(n){return n?vt(R(n),-kn,kn):n===0?n:0}function W(n){return n==null?"":ln(n)}var Wp=Ft((function(n,t){if(he(t)||an(t)){Un(t,V(t),n);return}for(var e in t)F.call(t,e)&&se(n,e,t[e])})),fa=Ft((function(n,t){Un(t,on(t),n)})),fr=Ft((function(n,t,e,r){Un(t,on(t),n,r)})),Fp=Ft((function(n,t,e,r){Un(t,V(t),n,r)})),Mp=Yn(Zr);function qp(n,t){var e=Wt(n);return t==null?e:qs(e,t)}var Bp=T((function(n,t){n=M(n);var e=-1,r=t.length,s=r>2?t[2]:i;for(s&&rn(t[0],t[1],s)&&(r=1);++e<r;)for(var o=t[e],f=on(o),c=-1,l=f.length;++c<l;){var v=f[c],_=n[v];(_===i||bn(_,Nt[v])&&!F.call(n,v))&&(n[v]=o[v])}return n})),Gp=T((function(n){return n.push(i,yu),cn(ca,i,n)}));function zp(n,t){return Cs(n,x(t,3),$n)}function Kp(n,t){return Cs(n,x(t,3),Xr)}function Yp(n,t){return n==null?n:Jr(n,x(t,3),on)}function Zp(n,t){return n==null?n:Ys(n,x(t,3),on)}function Jp(n,t){return n&&$n(n,x(t,3))}function Xp(n,t){return n&&Xr(n,x(t,3))}function Qp(n){return n==null?[]:ze(n,V(n))}function Vp(n){return n==null?[]:ze(n,on(n))}function Si(n,t,e){var r=n==null?i:_t(n,t);return r===i?e:r}function kp(n,t){return n!=null&&Ru(n,t,Ac)}function Oi(n,t){return n!=null&&Ru(n,t,Cc)}var jp=Au((function(n,t,e){t!=null&&typeof t.toString!="function"&&(t=Te.call(t)),n[t]=e}),bi(fn)),nd=Au((function(n,t,e){t!=null&&typeof t.toString!="function"&&(t=Te.call(t)),F.call(n,t)?n[t].push(e):n[t]=[e]}),x),td=T(ae);function V(n){return an(n)?Fs(n):jr(n)}function on(n){return an(n)?Fs(n,!0):Lc(n)}function ed(n,t){var e={};return t=x(t,3),$n(n,(function(r,s,o){zn(e,t(r,s,o),r)})),e}function rd(n,t){var e={};return t=x(t,3),$n(n,(function(r,s,o){zn(e,s,t(r,s,o))})),e}var id=Ft((function(n,t,e){Ke(n,t,e)})),ca=Ft((function(n,t,e,r){Ke(n,t,e,r)})),sd=Yn((function(n,t){var e={};if(n==null)return e;var r=!1;t=G(t,(function(o){return o=st(o,n),r||(r=o.length>1),o})),Un(n,pi(n),e),r&&(e=An(e,Ln|Fn|xt,jc));for(var s=t.length;s--;)si(e,t[s]);return e}));function ud(n,t){return ha(n,ur(x(t)))}var ad=Yn((function(n,t){return n==null?{}:Hc(n,t)}));function ha(n,t){if(n==null)return{};var e=G(pi(n),(function(r){return[r]}));return t=x(t),eu(n,e,(function(r,s){return t(r,s[0])}))}function od(n,t,e){t=st(t,n);var r=-1,s=t.length;for(s||(s=1,n=i);++r<s;){var o=n==null?i:n[Wn(t[r])];o===i&&(r=s,o=e),n=Jn(o)?o.call(n):o}return n}function fd(n,t,e){return n==null?n:fe(n,t,e)}function cd(n,t,e,r){return r=typeof r=="function"?r:i,n==null?n:fe(n,t,e,r)}var la=xu(V),pa=xu(on);function hd(n,t,e){var r=O(n),s=r||at(n)||Bt(n);if(t=x(t,4),e==null){var o=n&&n.constructor;s?e=r?new o:[]:K(n)?e=Jn(o)?Wt(He(n)):{}:e={}}return(s?mn:$n)(n,(function(f,c,l){return t(e,f,c,l)})),e}function ld(n,t){return n==null?!0:si(n,t)}function pd(n,t,e){return n==null?n:au(n,t,oi(e))}function dd(n,t,e,r){return r=typeof r=="function"?r:i,n==null?n:au(n,t,oi(e),r)}function Gt(n){return n==null?[]:Mr(n,V(n))}function gd(n){return n==null?[]:Mr(n,on(n))}function vd(n,t,e){return e===i&&(e=t,t=i),e!==i&&(e=xn(e),e=e===e?e:0),t!==i&&(t=xn(t),t=t===t?t:0),vt(xn(n),t,e)}function _d(n,t,e){return t=Xn(t),e===i?(e=t,t=0):e=Xn(e),n=xn(n),Ic(n,t,e)}function md(n,t,e){if(e&&typeof e!="boolean"&&rn(n,t,e)&&(t=e=i),e===i&&(typeof t=="boolean"?(e=t,t=i):typeof n=="boolean"&&(e=n,n=i)),n===i&&t===i?(n=0,t=1):(n=Xn(n),t===i?(t=n,n=0):t=Xn(t)),n>t){var r=n;n=t,t=r}if(e||n%1||t%1){var s=Us();return nn(n+s*(t-n+Xo("1e-"+((s+"").length-1))),t)}return ei(n,t)}var wd=Mt((function(n,t,e){return t=t.toLowerCase(),n+(e?da(t):t)}));function da(n){return Ri(W(n).toLowerCase())}function ga(n){return n=W(n),n&&n.replace(Po,ff).replace(Fo,"")}function Pd(n,t,e){n=W(n),t=ln(t);var r=n.length;e=e===i?r:vt(R(e),0,r);var s=e;return e-=t.length,e>=0&&n.slice(e,s)==t}function Ad(n){return n=W(n),n&&ja.test(n)?n.replace(Yi,cf):n}function Cd(n){return n=W(n),n&&so.test(n)?n.replace(xr,"\\$&"):n}var Id=Mt((function(n,t,e){return n+(e?"-":"")+t.toLowerCase()})),xd=Mt((function(n,t,e){return n+(e?" ":"")+t.toLowerCase()})),Ed=mu("toLowerCase");function yd(n,t,e){n=W(n),t=R(t);var r=t?Dt(n):0;if(!t||r>=t)return n;var s=(t-r)/2;return Ve(We(s),e)+n+Ve(Ue(s),e)}function Sd(n,t,e){n=W(n),t=R(t);var r=t?Dt(n):0;return t&&r<t?n+Ve(t-r,e):n}function Od(n,t,e){n=W(n),t=R(t);var r=t?Dt(n):0;return t&&r<t?Ve(t-r,e)+n:n}function Rd(n,t,e){return e||t==null?t=0:t&&(t=+t),$f(W(n).replace(Er,""),t||0)}function bd(n,t,e){return(e?rn(n,t,e):t===i)?t=1:t=R(t),ri(W(n),t)}function Td(){var n=arguments,t=W(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var Ld=Mt((function(n,t,e){return n+(e?"_":"")+t.toLowerCase()}));function Dd(n,t,e){return e&&typeof e!="number"&&rn(n,t,e)&&(t=e=i),e=e===i?Nn:e>>>0,e?(n=W(n),n&&(typeof t=="string"||t!=null&&!yi(t))&&(t=ln(t),!t&&Lt(n))?ut(On(n),0,e):n.split(t,e)):[]}var Hd=Mt((function(n,t,e){return n+(e?" ":"")+Ri(t)}));function Nd(n,t,e){return n=W(n),e=e==null?0:vt(R(e),0,n.length),t=ln(t),n.slice(e,e+t.length)==t}function $d(n,t,e){var r=a.templateSettings;e&&rn(n,t,e)&&(t=i),n=W(n),t=fr({},t,r,Eu);var s=fr({},t.imports,r.imports,Eu),o=V(s),f=Mr(s,o),c,l,v=0,_=t.interpolate||Ce,m="__p += '",P=Br((t.escape||Ce).source+"|"+_.source+"|"+(_===Zi?po:Ce).source+"|"+(t.evaluate||Ce).source+"|$","g"),I="//# sourceURL="+(F.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zo+"]")+`\n`;n.replace(P,(function(y,H,$,dn,sn,gn){return $||($=dn),m+=n.slice(v,gn).replace(Ao,hf),H&&(c=!0,m+=`' +\n__e(`+H+`) +\n'`),sn&&(l=!0,m+=`';\n`+sn+`;\n__p += '`),$&&(m+=`' +\n((__t = (`+$+`)) == null ? '' : __t) +\n'`),v=gn+y.length,y})),m+=`';\n`;var E=F.call(t,"variable")&&t.variable;if(!E)m=`with (obj) {\n`+m+`\n}\n`;else if(ho.test(E))throw new S(En);m=(l?m.replace(Xa,""):m).replace(Qa,"$1").replace(Va,"$1;"),m="function("+(E||"obj")+`) {\n`+(E?"":`obj || (obj = {});\n`)+"var __t, __p = ''"+(c?", __e = _.escape":"")+(l?`, __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n`:`;\n`)+m+`return __p\n}`;var b=_a((function(){return U(o,I+"return "+m).apply(i,f)}));if(b.source=m,Ei(b))throw b;return b}function Ud(n){return W(n).toLowerCase()}function Wd(n){return W(n).toUpperCase()}function Fd(n,t,e){if(n=W(n),n&&(e||t===i))return ys(n);if(!n||!(t=ln(t)))return n;var r=On(n),s=On(t),o=Ss(r,s),f=Os(r,s)+1;return ut(r,o,f).join("")}function Md(n,t,e){if(n=W(n),n&&(e||t===i))return n.slice(0,bs(n)+1);if(!n||!(t=ln(t)))return n;var r=On(n),s=Os(r,On(t))+1;return ut(r,0,s).join("")}function qd(n,t,e){if(n=W(n),n&&(e||t===i))return n.replace(Er,"");if(!n||!(t=ln(t)))return n;var r=On(n),s=Ss(r,On(t));return ut(r,s).join("")}function Bd(n,t){var e=Da,r=Ha;if(K(t)){var s="separator"in t?t.separator:s;e="length"in t?R(t.length):e,r="omission"in t?ln(t.omission):r}n=W(n);var o=n.length;if(Lt(n)){var f=On(n);o=f.length}if(e>=o)return n;var c=e-Dt(r);if(c<1)return r;var l=f?ut(f,0,c).join(""):n.slice(0,c);if(s===i)return l+r;if(f&&(c+=l.length-c),yi(s)){if(n.slice(c).search(s)){var v,_=l;for(s.global||(s=Br(s.source,W(Ji.exec(s))+"g")),s.lastIndex=0;v=s.exec(_);)var m=v.index;l=l.slice(0,m===i?c:m)}}else if(n.indexOf(ln(s),c)!=c){var P=l.lastIndexOf(s);P>-1&&(l=l.slice(0,P))}return l+r}function Gd(n){return n=W(n),n&&ka.test(n)?n.replace(Ki,mf):n}var zd=Mt((function(n,t,e){return n+(e?" ":"")+t.toUpperCase()})),Ri=mu("toUpperCase");function va(n,t,e){return n=W(n),t=e?i:t,t===i?pf(n)?Af(n):rf(n):n.match(t)||[]}var _a=T((function(n,t){try{return cn(n,i,t)}catch(e){return Ei(e)?e:new S(e)}})),Kd=Yn((function(n,t){return mn(t,(function(e){e=Wn(e),zn(n,e,Ii(n[e],n))})),n}));function Yd(n){var t=n==null?0:n.length,e=x();return n=t?G(n,(function(r){if(typeof r[1]!="function")throw new wn(D);return[e(r[0]),r[1]]})):[],T((function(r){for(var s=-1;++s<t;){var o=n[s];if(cn(o[0],this,r))return cn(o[1],this,r)}}))}function Zd(n){return mc(An(n,Ln))}function bi(n){return function(){return n}}function Jd(n,t){return n==null||n!==n?t:n}var Xd=Pu(),Qd=Pu(!0);function fn(n){return n}function Ti(n){return Qs(typeof n=="function"?n:An(n,Ln))}function Vd(n){return ks(An(n,Ln))}function kd(n,t){return js(n,An(t,Ln))}var jd=T((function(n,t){return function(e){return ae(e,n,t)}})),ng=T((function(n,t){return function(e){return ae(n,e,t)}}));function Li(n,t,e){var r=V(t),s=ze(t,r);e==null&&!(K(t)&&(s.length||!r.length))&&(e=t,t=n,n=this,s=ze(t,V(t)));var o=!(K(e)&&"chain"in e)||!!e.chain,f=Jn(n);return mn(s,(function(c){var l=t[c];n[c]=l,f&&(n.prototype[c]=function(){var v=this.__chain__;if(o||v){var _=n(this.__wrapped__),m=_.__actions__=un(this.__actions__);return m.push({func:l,args:arguments,thisArg:n}),_.__chain__=v,_}return l.apply(n,nt([this.value()],arguments))})})),n}function tg(){return k._===this&&(k._=Sf),this}function Di(){}function eg(n){return n=R(n),T((function(t){return nu(t,n)}))}var rg=ci(G),ig=ci(As),sg=ci(Nr);function ma(n){return _i(n)?$r(Wn(n)):Nc(n)}function ug(n){return function(t){return n==null?i:_t(n,t)}}var ag=Cu(),og=Cu(!0);function Hi(){return[]}function Ni(){return!1}function fg(){return{}}function cg(){return""}function hg(){return!0}function lg(n,t){if(n=R(n),n<1||n>kn)return[];var e=Nn,r=nn(n,Nn);t=x(t),n-=Nn;for(var s=Fr(r,t);++e<n;)t(e);return s}function pg(n){return O(n)?G(n,Wn):pn(n)?[n]:un(Wu(W(n)))}function dg(n){var t=++Ef;return W(n)+t}var gg=Qe((function(n,t){return n+t}),0),vg=hi("ceil"),_g=Qe((function(n,t){return n/t}),1),mg=hi("floor");function wg(n){return n&&n.length?Ge(n,fn,Qr):i}function Pg(n,t){return n&&n.length?Ge(n,x(t,2),Qr):i}function Ag(n){return xs(n,fn)}function Cg(n,t){return xs(n,x(t,2))}function Ig(n){return n&&n.length?Ge(n,fn,ni):i}function xg(n,t){return n&&n.length?Ge(n,x(t,2),ni):i}var Eg=Qe((function(n,t){return n*t}),1),yg=hi("round"),Sg=Qe((function(n,t){return n-t}),0);function Og(n){return n&&n.length?Wr(n,fn):0}function Rg(n,t){return n&&n.length?Wr(n,x(t,2)):0}return a.after=Vl,a.ary=Xu,a.assign=Wp,a.assignIn=fa,a.assignInWith=fr,a.assignWith=Fp,a.at=Mp,a.before=Qu,a.bind=Ii,a.bindAll=Kd,a.bindKey=Vu,a.castArray=fp,a.chain=Yu,a.chunk=mh,a.compact=wh,a.concat=Ph,a.cond=Yd,a.conforms=Zd,a.constant=bi,a.countBy=Ol,a.create=qp,a.curry=ku,a.curryRight=ju,a.debounce=na,a.defaults=Bp,a.defaultsDeep=Gp,a.defer=kl,a.delay=jl,a.difference=Ah,a.differenceBy=Ch,a.differenceWith=Ih,a.drop=xh,a.dropRight=Eh,a.dropRightWhile=yh,a.dropWhile=Sh,a.fill=Oh,a.filter=bl,a.flatMap=Dl,a.flatMapDeep=Hl,a.flatMapDepth=Nl,a.flatten=Bu,a.flattenDeep=Rh,a.flattenDepth=bh,a.flip=np,a.flow=Xd,a.flowRight=Qd,a.fromPairs=Th,a.functions=Qp,a.functionsIn=Vp,a.groupBy=$l,a.initial=Dh,a.intersection=Hh,a.intersectionBy=Nh,a.intersectionWith=$h,a.invert=jp,a.invertBy=nd,a.invokeMap=Wl,a.iteratee=Ti,a.keyBy=Fl,a.keys=V,a.keysIn=on,a.map=rr,a.mapKeys=ed,a.mapValues=rd,a.matches=Vd,a.matchesProperty=kd,a.memoize=sr,a.merge=id,a.mergeWith=ca,a.method=jd,a.methodOf=ng,a.mixin=Li,a.negate=ur,a.nthArg=eg,a.omit=sd,a.omitBy=ud,a.once=tp,a.orderBy=Ml,a.over=rg,a.overArgs=ep,a.overEvery=ig,a.overSome=sg,a.partial=xi,a.partialRight=ta,a.partition=ql,a.pick=ad,a.pickBy=ha,a.property=ma,a.propertyOf=ug,a.pull=Mh,a.pullAll=zu,a.pullAllBy=qh,a.pullAllWith=Bh,a.pullAt=Gh,a.range=ag,a.rangeRight=og,a.rearg=rp,a.reject=zl,a.remove=zh,a.rest=ip,a.reverse=Ai,a.sampleSize=Yl,a.set=fd,a.setWith=cd,a.shuffle=Zl,a.slice=Kh,a.sortBy=Ql,a.sortedUniq=kh,a.sortedUniqBy=jh,a.split=Dd,a.spread=sp,a.tail=nl,a.take=tl,a.takeRight=el,a.takeRightWhile=rl,a.takeWhile=il,a.tap=wl,a.throttle=up,a.thru=er,a.toArray=ua,a.toPairs=la,a.toPairsIn=pa,a.toPath=pg,a.toPlainObject=oa,a.transform=hd,a.unary=ap,a.union=sl,a.unionBy=ul,a.unionWith=al,a.uniq=ol,a.uniqBy=fl,a.uniqWith=cl,a.unset=ld,a.unzip=Ci,a.unzipWith=Ku,a.update=pd,a.updateWith=dd,a.values=Gt,a.valuesIn=gd,a.without=hl,a.words=va,a.wrap=op,a.xor=ll,a.xorBy=pl,a.xorWith=dl,a.zip=gl,a.zipObject=vl,a.zipObjectDeep=_l,a.zipWith=ml,a.entries=la,a.entriesIn=pa,a.extend=fa,a.extendWith=fr,Li(a,a),a.add=gg,a.attempt=_a,a.camelCase=wd,a.capitalize=da,a.ceil=vg,a.clamp=vd,a.clone=cp,a.cloneDeep=lp,a.cloneDeepWith=pp,a.cloneWith=hp,a.conformsTo=dp,a.deburr=ga,a.defaultTo=Jd,a.divide=_g,a.endsWith=Pd,a.eq=bn,a.escape=Ad,a.escapeRegExp=Cd,a.every=Rl,a.find=Tl,a.findIndex=Mu,a.findKey=zp,a.findLast=Ll,a.findLastIndex=qu,a.findLastKey=Kp,a.floor=mg,a.forEach=Zu,a.forEachRight=Ju,a.forIn=Yp,a.forInRight=Zp,a.forOwn=Jp,a.forOwnRight=Xp,a.get=Si,a.gt=gp,a.gte=vp,a.has=kp,a.hasIn=Oi,a.head=Gu,a.identity=fn,a.includes=Ul,a.indexOf=Lh,a.inRange=_d,a.invoke=td,a.isArguments=Pt,a.isArray=O,a.isArrayBuffer=_p,a.isArrayLike=an,a.isArrayLikeObject=Z,a.isBoolean=mp,a.isBuffer=at,a.isDate=wp,a.isElement=Pp,a.isEmpty=Ap,a.isEqual=Cp,a.isEqualWith=Ip,a.isError=Ei,a.isFinite=xp,a.isFunction=Jn,a.isInteger=ea,a.isLength=ar,a.isMap=ra,a.isMatch=Ep,a.isMatchWith=yp,a.isNaN=Sp,a.isNative=Op,a.isNil=bp,a.isNull=Rp,a.isNumber=ia,a.isObject=K,a.isObjectLike=Y,a.isPlainObject=pe,a.isRegExp=yi,a.isSafeInteger=Tp,a.isSet=sa,a.isString=or,a.isSymbol=pn,a.isTypedArray=Bt,a.isUndefined=Lp,a.isWeakMap=Dp,a.isWeakSet=Hp,a.join=Uh,a.kebabCase=Id,a.last=In,a.lastIndexOf=Wh,a.lowerCase=xd,a.lowerFirst=Ed,a.lt=Np,a.lte=$p,a.max=wg,a.maxBy=Pg,a.mean=Ag,a.meanBy=Cg,a.min=Ig,a.minBy=xg,a.stubArray=Hi,a.stubFalse=Ni,a.stubObject=fg,a.stubString=cg,a.stubTrue=hg,a.multiply=Eg,a.nth=Fh,a.noConflict=tg,a.noop=Di,a.now=ir,a.pad=yd,a.padEnd=Sd,a.padStart=Od,a.parseInt=Rd,a.random=md,a.reduce=Bl,a.reduceRight=Gl,a.repeat=bd,a.replace=Td,a.result=od,a.round=yg,a.runInContext=h,a.sample=Kl,a.size=Jl,a.snakeCase=Ld,a.some=Xl,a.sortedIndex=Yh,a.sortedIndexBy=Zh,a.sortedIndexOf=Jh,a.sortedLastIndex=Xh,a.sortedLastIndexBy=Qh,a.sortedLastIndexOf=Vh,a.startCase=Hd,a.startsWith=Nd,a.subtract=Sg,a.sum=Og,a.sumBy=Rg,a.template=$d,a.times=lg,a.toFinite=Xn,a.toInteger=R,a.toLength=aa,a.toLower=Ud,a.toNumber=xn,a.toSafeInteger=Up,a.toString=W,a.toUpper=Wd,a.trim=Fd,a.trimEnd=Md,a.trimStart=qd,a.truncate=Bd,a.unescape=Gd,a.uniqueId=dg,a.upperCase=zd,a.upperFirst=Ri,a.each=Zu,a.eachRight=Ju,a.first=Gu,Li(a,function(){var n={};return $n(a,(function(t,e){F.call(a.prototype,e)||(n[e]=t)})),n}(),{chain:!1}),a.VERSION=d,mn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(n){a[n].placeholder=a})),mn(["drop","take"],(function(n,t){N.prototype[n]=function(e){e=e===i?1:Q(R(e),0);var r=this.__filtered__&&!t?new N(this):this.clone();return r.__filtered__?r.__takeCount__=nn(e,r.__takeCount__):r.__views__.push({size:nn(e,Nn),type:n+(r.__dir__<0?"Right":"")}),r},N.prototype[n+"Right"]=function(e){return this.reverse()[n](e).reverse()}})),mn(["filter","map","takeWhile"],(function(n,t){var e=t+1,r=e==Bi||e==Wa;N.prototype[n]=function(s){var o=this.clone();return o.__iteratees__.push({iteratee:x(s,3),type:e}),o.__filtered__=o.__filtered__||r,o}})),mn(["head","last"],(function(n,t){var e="take"+(t?"Right":"");N.prototype[n]=function(){return this[e](1).value()[0]}})),mn(["initial","tail"],(function(n,t){var e="drop"+(t?"":"Right");N.prototype[n]=function(){return this.__filtered__?new N(this):this[e](1)}})),N.prototype.compact=function(){return this.filter(fn)},N.prototype.find=function(n){return this.filter(n).head()},N.prototype.findLast=function(n){return this.reverse().find(n)},N.prototype.invokeMap=T((function(n,t){return typeof n=="function"?new N(this):this.map((function(e){return ae(e,n,t)}))})),N.prototype.reject=function(n){return this.filter(ur(x(n)))},N.prototype.slice=function(n,t){n=R(n);var e=this;return e.__filtered__&&(n>0||t<0)?new N(e):(n<0?e=e.takeRight(-n):n&&(e=e.drop(n)),t!==i&&(t=R(t),e=t<0?e.dropRight(-t):e.take(t-n)),e)},N.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},N.prototype.toArray=function(){return this.take(Nn)},$n(N.prototype,(function(n,t){var e=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),s=a[r?"take"+(t=="last"?"Right":""):t],o=r||/^find/.test(t);s&&(a.prototype[t]=function(){var f=this.__wrapped__,c=r?[1]:arguments,l=f instanceof N,v=c[0],_=l||O(f),m=function(H){var $=s.apply(a,nt([H],c));return r&&P?$[0]:$};_&&e&&typeof v=="function"&&v.length!=1&&(l=_=!1);var P=this.__chain__,I=!!this.__actions__.length,E=o&&!P,b=l&&!I;if(!o&&_){f=b?f:new N(this);var y=n.apply(f,c);return y.__actions__.push({func:er,args:[m],thisArg:i}),new Pn(y,P)}return E&&b?n.apply(this,c):(y=this.thru(m),E?r?y.value()[0]:y.value():y)})})),mn(["pop","push","shift","sort","splice","unshift"],(function(n){var t=Oe[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",r=/^(?:pop|shift)$/.test(n);a.prototype[n]=function(){var s=arguments;if(r&&!this.__chain__){var o=this.value();return t.apply(O(o)?o:[],s)}return this[e]((function(f){return t.apply(O(f)?f:[],s)}))}})),$n(N.prototype,(function(n,t){var e=a[t];if(e){var r=e.name+"";F.call(Ut,r)||(Ut[r]=[]),Ut[r].push({name:t,func:e})}})),Ut[Xe(i,ct).name]=[{name:"wrapper",func:i}],N.prototype.clone=Gf,N.prototype.reverse=zf,N.prototype.value=Kf,a.prototype.at=Pl,a.prototype.chain=Al,a.prototype.commit=Cl,a.prototype.next=Il,a.prototype.plant=El,a.prototype.reverse=yl,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Sl,a.prototype.first=a.prototype.head,ne&&(a.prototype[ne]=xl),a},Ht=Cf();lt?((lt.exports=Ht)._=Ht,Tr._=Ht):k._=Ht}).call(ge)})(Ui,Ui.exports);var Gg=Object.defineProperty,zg=Object.defineProperties,Kg=Object.getOwnPropertyDescriptors,Ea=Object.getOwnPropertySymbols,Yg=Object.prototype.hasOwnProperty,Zg=Object.prototype.propertyIsEnumerable,ya=(A,u,i)=>u in A?Gg(A,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):A[u]=i,cr=(A,u)=>{for(var i in u||(u={}))Yg.call(u,i)&&ya(A,i,u[i]);if(Ea)for(var i of Ea(u))Zg.call(u,i)&&ya(A,i,u[i]);return A},Jg=(A,u)=>zg(A,Kg(u));function ft(A,u,i){var d;const w=(0,index_cjs.parseChainId)(A);return((d=u.rpcMap)==null?void 0:d[w.reference])||`${Bg}?chainId=${w.namespace}:${w.reference}&projectId=${i}`}function Ct(A){return A.includes(":")?A.split(":")[1]:A}function Sa(A){return A.map((u=>`${u.split(":")[0]}:${u.split(":")[1]}`))}function Xg(A,u){const i=Object.keys(u.namespaces).filter((w=>w.includes(A)));if(!i.length)return[];const d=[];return i.forEach((w=>{const L=u.namespaces[w].accounts;d.push(...L)})),d}function Oa(A={},u={}){const i=Ra(A),d=Ra(u);return Ui.exports.merge(i,d)}function Ra(A){var u,i,d,w;const L={};if(!(0,index_cjs.isValidObject)(A))return L;for(const[D,En]of Object.entries(A)){const zt=(0,index_cjs.isCaipNamespace)(D)?[D]:En.chains,pr=En.methods||[],It=En.events||[],Ln=En.rpcMap||{},Fn=(0,index_cjs.parseNamespaceKey)(D);L[Fn]=Jg(cr(cr({},L[Fn]),En),{chains:(0,index_cjs.mergeArrays)(zt,(u=L[Fn])==null?void 0:u.chains),methods:(0,index_cjs.mergeArrays)(pr,(i=L[Fn])==null?void 0:i.methods),events:(0,index_cjs.mergeArrays)(It,(d=L[Fn])==null?void 0:d.events),rpcMap:cr(cr({},Ln),(w=L[Fn])==null?void 0:w.rpcMap)})}return L}function Qg(A){return A.includes(":")?A.split(":")[2]:A}function Vg(A){const u={};for(const[i,d]of Object.entries(A)){const w=d.methods||[],L=d.events||[],D=d.accounts||[],En=(0,index_cjs.isCaipNamespace)(i)?[i]:d.chains?d.chains:Sa(d.accounts);u[i]={chains:En,methods:w,events:L,accounts:D}}return u}function Wi(A){return typeof A=="number"?A:A.includes("0x")?parseInt(A,16):(A=A.includes(":")?A.split(":")[1]:A,isNaN(Number(A))?A:Number(A))}const ba={},index_es_z=A=>ba[A],Fi=(A,u)=>{ba[A]=u};class kg{constructor(u){this.name="polkadot",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getAccounts(){const u=this.namespace.accounts;return u?u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2]))||[]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{var d;const w=Ct(i);u[w]=this.createHttpProvider(w,(d=this.namespace.rpcMap)==null?void 0:d[i])})),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProvider(u,i){const d=i||ft(u,this.namespace,this.client.core.projectId);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);return new jsonrpc_provider_dist_esm.JsonRpcProvider(new jsonrpc_http_connection_dist_esm(d,index_es_z("disableProviderPing")))}}class jg{constructor(u){this.name="eip155",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(u){switch(u.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(u);case"eth_chainId":return parseInt(this.getDefaultChain())}return this.namespace.methods.includes(u.request.method)?await this.client.request(u):this.getHttpProvider().request(u.request)}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(parseInt(u),i),this.chainId=parseInt(u),this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}createHttpProvider(u,i){const d=i||ft(`${this.name}:${u}`,this.namespace,this.client.core.projectId);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);return new jsonrpc_provider_dist_esm.JsonRpcProvider(new HttpConnection(d,index_es_z("disableProviderPing")))}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{var d;const w=parseInt(Ct(i));u[w]=this.createHttpProvider(w,(d=this.namespace.rpcMap)==null?void 0:d[i])})),u}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2])))]:[]}getHttpProvider(){const u=this.chainId,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}async handleSwitchChain(u){var i,d;let w=u.request.params?(i=u.request.params[0])==null?void 0:i.chainId:"0x0";w=w.startsWith("0x")?w:`0x${w}`;const L=parseInt(w,16);if(this.isChainApproved(L))this.setDefaultChain(`${L}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:u.topic,request:{method:u.request.method,params:[{chainId:w}]},chainId:(d=this.namespace.chains)==null?void 0:d[0]}),this.setDefaultChain(`${L}`);else throw new Error(`Failed to switch to chain 'eip155:${L}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(u){return this.namespace.chains.includes(`${this.name}:${u}`)}}class nv{constructor(u){this.name="solana",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2])))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{var d;const w=Ct(i);u[w]=this.createHttpProvider(w,(d=this.namespace.rpcMap)==null?void 0:d[i])})),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProvider(u,i){const d=i||ft(u,this.namespace,this.client.core.projectId);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);return new jsonrpc_provider_dist_esm.JsonRpcProvider(new jsonrpc_http_connection_dist_esm(d,index_es_z("disableProviderPing")))}}class tv{constructor(u){this.name="cosmos",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2])))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{var d;const w=Ct(i);u[w]=this.createHttpProvider(w,(d=this.namespace.rpcMap)==null?void 0:d[i])})),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProvider(u,i){const d=i||ft(u,this.namespace,this.client.core.projectId);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);return new jsonrpc_provider_dist_esm.JsonRpcProvider(new jsonrpc_http_connection_dist_esm(d,index_es_z("disableProviderPing")))}}class ev{constructor(u){this.name="cip34",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2])))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{const d=this.getCardanoRPCUrl(i),w=Ct(i);u[w]=this.createHttpProvider(w,d)})),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}getCardanoRPCUrl(u){const i=this.namespace.rpcMap;if(i)return i[u]}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProvider(u,i){const d=i||this.getCardanoRPCUrl(u);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);return new jsonrpc_provider_dist_esm.JsonRpcProvider(new jsonrpc_http_connection_dist_esm(d,index_es_z("disableProviderPing")))}}class rv{constructor(u){this.name="elrond",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2])))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{var d;const w=Ct(i);u[w]=this.createHttpProvider(w,(d=this.namespace.rpcMap)==null?void 0:d[i])})),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProvider(u,i){const d=i||ft(u,this.namespace,this.client.core.projectId);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);return new jsonrpc_provider_dist_esm.JsonRpcProvider(new jsonrpc_http_connection_dist_esm(d,index_es_z("disableProviderPing")))}}class iv{constructor(u){this.name="multiversx",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2])))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{var d;const w=Ct(i);u[w]=this.createHttpProvider(w,(d=this.namespace.rpcMap)==null?void 0:d[i])})),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProvider(u,i){const d=i||ft(u,this.namespace,this.client.core.projectId);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);return new jsonrpc_provider_dist_esm.JsonRpcProvider(new jsonrpc_http_connection_dist_esm(d,index_es_z("disableProviderPing")))}}class sv{constructor(u){this.name="near",this.namespace=u.namespace,this.events=index_es_z("events"),this.client=index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){if(this.chainId=u,!this.httpProviders[u]){const d=i||ft(`${this.name}:${u}`,this.namespace);if(!d)throw new Error(`No RPC url provided for chainId: ${u}`);this.setHttpProvider(u,d)}this.events.emit(Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const u=this.namespace.accounts;return u?u.filter((i=>i.split(":")[1]===this.chainId.toString())).map((i=>i.split(":")[2]))||[]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach((i=>{var d;u[i]=this.createHttpProvider(i,(d=this.namespace.rpcMap)==null?void 0:d[i])})),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const d=this.createHttpProvider(u,i);d&&(this.httpProviders[u]=d)}createHttpProvider(u,i){const d=i||ft(u,this.namespace);return typeof d>"u"?void 0:new jsonrpc_provider_dist_esm.JsonRpcProvider(new jsonrpc_http_connection_dist_esm(d,index_es_z("disableProviderPing")))}}var uv=Object.defineProperty,av=Object.defineProperties,ov=Object.getOwnPropertyDescriptors,Ta=Object.getOwnPropertySymbols,fv=Object.prototype.hasOwnProperty,cv=Object.prototype.propertyIsEnumerable,La=(A,u,i)=>u in A?uv(A,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):A[u]=i,hr=(A,u)=>{for(var i in u||(u={}))fv.call(u,i)&&La(A,i,u[i]);if(Ta)for(var i of Ta(u))cv.call(u,i)&&La(A,i,u[i]);return A},Mi=(A,u)=>av(A,ov(u));class lr{constructor(u){this.events=new(events_default()),this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=u,this.logger=typeof u?.logger<"u"&&typeof u?.logger!="string"?u.logger:(0,cjs.pino)((0,cjs.getDefaultLoggerOptions)({level:u?.logger||Ia})),this.disableProviderPing=u?.disableProviderPing||!1}static async init(u){const i=new lr(u);return await i.initialize(),i}async request(u,i,d){const[w,L]=this.validateChain(i);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(w).request({request:hr({},u),chainId:`${w}:${L}`,topic:this.session.topic,expiry:d})}sendAsync(u,i,d,w){const L=(new Date).getTime();this.request(u,d,w).then((D=>i(null,(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(L,D)))).catch((D=>i(D,void 0)))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties}),await this.requestAccounts()}async disconnect(){var u;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(u=this.session)==null?void 0:u.topic,reason:(0,index_cjs.getSdkError)("USER_DISCONNECTED")}),await this.cleanup()}async connect(u){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(u),await this.cleanupPendingPairings(),!u.skipPairing)return await this.pair(u.pairingTopic)}on(u,i){this.events.on(u,i)}once(u,i){this.events.once(u,i)}removeListener(u,i){this.events.removeListener(u,i)}off(u,i){this.events.off(u,i)}get isWalletConnect(){return!0}async pair(u){this.shouldAbortPairingAttempt=!1;let i=0;do{if(this.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(i>=this.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:d,approval:w}=await this.client.connect({pairingTopic:u,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties});d&&(this.uri=d,this.events.emit("display_uri",d)),await w().then((L=>{this.session=L;const D=Vg(L.namespaces);this.namespaces=Oa(this.namespaces,D),this.persist("namespaces",this.namespaces)})).catch((L=>{if(L.message!==dist_index_cjs.lO)throw L;i++}))}while(!this.session);return this.onConnect(),this.session}setDefaultChain(u,i){try{if(!this.session)return;const[d,w]=this.validateChain(u);this.getProvider(d).setDefaultChain(w,i)}catch(d){if(!/Please call connect/.test(d.message))throw d}}async cleanupPendingPairings(u={}){this.logger.info("Cleaning up inactive pairings...");const i=this.client.pairing.getAll();if((0,index_cjs.isValidArray)(i)){for(const d of i)u.deletePairings?this.client.core.expirer.set(d.topic,0):await this.client.core.relayer.subscriber.unsubscribe(d.topic);this.logger.info(`Inactive pairings cleared: ${i.length}`)}}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}async checkStorage(){if(this.namespaces=await this.getFromStore("namespaces"),this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.client.session.length){const u=this.client.session.keys.length-1;this.session=this.client.session.get(this.client.session.keys[u]),this.createProviders()}}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){this.client=this.providerOpts.client||await dist_index_cjs.ZP.init({logger:this.providerOpts.logger||Ia,relayUrl:this.providerOpts.relayUrl||Fg,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name}),this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const u=[...new Set(Object.keys(this.session.namespaces).map((i=>(0,index_cjs.parseNamespaceKey)(i))))];Fi("client",this.client),Fi("events",this.events),Fi("disableProviderPing",this.disableProviderPing),u.forEach((i=>{if(!this.session)return;const d=Xg(i,this.session),w=Sa(d),L=Oa(this.namespaces,this.optionalNamespaces),D=Mi(hr({},L[i]),{accounts:d,chains:w});switch(i){case"eip155":this.rpcProviders[i]=new jg({namespace:D});break;case"solana":this.rpcProviders[i]=new nv({namespace:D});break;case"cosmos":this.rpcProviders[i]=new tv({namespace:D});break;case"polkadot":this.rpcProviders[i]=new kg({namespace:D});break;case"cip34":this.rpcProviders[i]=new ev({namespace:D});break;case"elrond":this.rpcProviders[i]=new rv({namespace:D});break;case"multiversx":this.rpcProviders[i]=new iv({namespace:D});break;case"near":this.rpcProviders[i]=new sv({namespace:D});break}}))}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",(u=>{this.events.emit("session_ping",u)})),this.client.on("session_event",(u=>{const{params:i}=u,{event:d}=i;if(d.name==="accountsChanged"){const w=d.data;w&&(0,index_cjs.isValidArray)(w)&&this.events.emit("accountsChanged",w.map(Qg))}else if(d.name==="chainChanged"){const w=i.chainId,L=i.event.data,D=(0,index_cjs.parseNamespaceKey)(w),En=Wi(w)!==Wi(L)?`${D}:${Wi(L)}`:w;this.onChainChanged(En)}else this.events.emit(d.name,d.data);this.events.emit("session_event",u)})),this.client.on("session_update",(({topic:u,params:i})=>{var d;const{namespaces:w}=i,L=(d=this.client)==null?void 0:d.session.get(u);this.session=Mi(hr({},L),{namespaces:w}),this.onSessionUpdate(),this.events.emit("session_update",{topic:u,params:i})})),this.client.on("session_delete",(async u=>{await this.cleanup(),this.events.emit("session_delete",u),this.events.emit("disconnect",Mi(hr({},(0,index_cjs.getSdkError)("USER_DISCONNECTED")),{data:u.topic}))})),this.on(Vn.DEFAULT_CHAIN_CHANGED,(u=>{this.onChainChanged(u,!0)}))}getProvider(u){if(!this.rpcProviders[u])throw new Error(`Provider not found: ${u}`);return this.rpcProviders[u]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach((u=>{var i;this.getProvider(u).updateNamespace((i=this.session)==null?void 0:i.namespaces[u])}))}setNamespaces(u){const{namespaces:i,optionalNamespaces:d,sessionProperties:w}=u;i&&Object.keys(i).length&&(this.namespaces=i),d&&Object.keys(d).length&&(this.optionalNamespaces=d),this.sessionProperties=w,this.persist("namespaces",i),this.persist("optionalNamespaces",d)}validateChain(u){const[i,d]=u?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[i,d];if(i&&!Object.keys(this.namespaces||{}).map((D=>(0,index_cjs.parseNamespaceKey)(D))).includes(i))throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);if(i&&d)return[i,d];const w=(0,index_cjs.parseNamespaceKey)(Object.keys(this.namespaces)[0]),L=this.rpcProviders[w].getDefaultChain();return[w,L]}async requestAccounts(){const[u]=this.validateChain();return await this.getProvider(u).requestAccounts()}onChainChanged(u,i=!1){if(!this.namespaces)return;const[d,w]=this.validateChain(u);w&&(i||this.getProvider(d).setDefaultChain(w),this.namespaces[d]?this.namespaces[d].defaultChain=w:this.namespaces[`${d}:${w}`]?this.namespaces[`${d}:${w}`].defaultChain=w:this.namespaces[`${d}:${w}`]={defaultChain:w},this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",w))}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.session=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,this.persist("namespaces",void 0),this.persist("optionalNamespaces",void 0),this.persist("sessionProperties",void 0),await this.cleanupPendingPairings({deletePairings:!0})}persist(u,i){this.client.core.storage.setItem(`${xa}/${u}`,i)}async getFromStore(u){return await this.client.core.storage.getItem(`${xa}/${u}`)}}const hv=lr;const P="wc",S="ethereum_provider",$=`${P}@2:${S}:`,j="https://rpc.walletconnect.com/v1/",u=["eth_sendTransaction","personal_sign"],E=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],m=["chainChanged","accountsChanged"],_=["chainChanged","accountsChanged","message","disconnect","connect"];var N=Object.defineProperty,q=Object.defineProperties,D=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,O=(a,t,s)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,p=(a,t)=>{for(var s in t||(t={}))U.call(t,s)&&O(a,s,t[s]);if(y)for(var s of y(t))Q.call(t,s)&&O(a,s,t[s]);return a},M=(a,t)=>q(a,D(t));function g(a){return Number(a[0].split(":")[1])}function f(a){return`0x${a.toString(16)}`}function L(a){const{chains:t,optionalChains:s,methods:i,optionalMethods:n,events:e,optionalEvents:h,rpcMap:c}=a;if(!(0,index_cjs.isValidArray)(t))throw new Error("Invalid chains");const o={chains:t,methods:i||u,events:e||m,rpcMap:p({},t.length?{[g(t)]:c[g(t)]}:{})},r=e?.filter((l=>!m.includes(l))),d=i?.filter((l=>!u.includes(l)));if(!s&&!h&&!n&&!(r!=null&&r.length)&&!(d!=null&&d.length))return{required:t.length?o:void 0};const C=r?.length&&d?.length||!s,I={chains:[...new Set(C?o.chains.concat(s||[]):s)],methods:[...new Set(o.methods.concat(n!=null&&n.length?n:E))],events:[...new Set(o.events.concat(h!=null&&h.length?h:_))],rpcMap:c};return{required:t.length?o:void 0,optional:s.length?I:void 0}}class v{constructor(){this.events=new events.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY=$,this.on=(t,s)=>(this.events.on(t,s),this),this.once=(t,s)=>(this.events.once(t,s),this),this.removeListener=(t,s)=>(this.events.removeListener(t,s),this),this.off=(t,s)=>(this.events.off(t,s),this),this.parseAccount=t=>this.isCompatibleChainId(t)?this.parseAccountId(t).address:t,this.signer={},this.rpc={}}static async init(t){const s=new v;return await s.initialize(t),s}async request(t,s){return await this.signer.request(t,this.formatChainId(this.chainId),s)}sendAsync(t,s,i){this.signer.sendAsync(t,s,this.formatChainId(this.chainId),i)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(t){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(t);const{required:s,optional:i}=L(this.rpc);try{const n=await new Promise((async(h,c)=>{var o;this.rpc.showQrModal&&((o=this.modal)==null||o.subscribeModal((r=>{!r.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))}))),await this.signer.connect(M(p({namespaces:p({},s&&{[this.namespace]:s})},i&&{optionalNamespaces:{[this.namespace]:i}}),{pairingTopic:t?.pairingTopic})).then((r=>{h(r)})).catch((r=>{c(new Error(r.message))}))}));if(!n)return;const e=(0,index_cjs.getAccountsFromNamespaces)(n.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:e),this.setAccounts(e),this.events.emit("connect",{chainId:f(this.chainId)})}catch(n){throw this.signer.logger.error(n),n}finally{this.modal&&this.modal.closeModal()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",(t=>{const{params:s}=t,{event:i}=s;i.name==="accountsChanged"?(this.accounts=this.parseAccounts(i.data),this.events.emit("accountsChanged",this.accounts)):i.name==="chainChanged"?this.setChainId(this.formatChainId(i.data)):this.events.emit(i.name,i.data),this.events.emit("session_event",t)})),this.signer.on("chainChanged",(t=>{const s=parseInt(t);this.chainId=s,this.events.emit("chainChanged",f(this.chainId)),this.persist()})),this.signer.on("session_update",(t=>{this.events.emit("session_update",t)})),this.signer.on("session_delete",(t=>{this.reset(),this.events.emit("session_delete",t),this.events.emit("disconnect",M(p({},(0,index_cjs.getSdkError)("USER_DISCONNECTED")),{data:t.topic,name:"USER_DISCONNECTED"}))})),this.signer.on("display_uri",(t=>{var s,i;this.rpc.showQrModal&&((s=this.modal)==null||s.closeModal(),(i=this.modal)==null||i.openModal({uri:t})),this.events.emit("display_uri",t)}))}switchEthereumChain(t){this.request({method:"wallet_switchEthereumChain",params:[{chainId:t.toString(16)}]})}isCompatibleChainId(t){return typeof t=="string"?t.startsWith(`${this.namespace}:`):!1}formatChainId(t){return`${this.namespace}:${t}`}parseChainId(t){return Number(t.split(":")[1])}setChainIds(t){const s=t.filter((i=>this.isCompatibleChainId(i))).map((i=>this.parseChainId(i)));s.length&&(this.chainId=s[0],this.events.emit("chainChanged",f(this.chainId)),this.persist())}setChainId(t){if(this.isCompatibleChainId(t)){const s=this.parseChainId(t);this.chainId=s,this.switchEthereumChain(s)}}parseAccountId(t){const[s,i,n]=t.split(":");return{chainId:`${s}:${i}`,address:n}}setAccounts(t){this.accounts=t.filter((s=>this.parseChainId(this.parseAccountId(s).chainId)===this.chainId)).map((s=>this.parseAccountId(s).address)),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(t){var s,i;const n=(s=t?.chains)!=null?s:[],e=(i=t?.optionalChains)!=null?i:[],h=n.concat(e);if(!h.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const c=n.length?t?.methods||u:[],o=n.length?t?.events||m:[],r=t?.optionalMethods||[],d=t?.optionalEvents||[],C=t?.rpcMap||this.buildRpcMap(h,t.projectId),I=t?.qrModalOptions||void 0;return{chains:n?.map((l=>this.formatChainId(l))),optionalChains:e.map((l=>this.formatChainId(l))),methods:c,events:o,optionalMethods:r,optionalEvents:d,rpcMap:C,showQrModal:!!(t!=null&&t.showQrModal),qrModalOptions:I,projectId:t.projectId,metadata:t.metadata}}buildRpcMap(t,s){const i={};return t.forEach((n=>{i[n]=this.getRpcUrl(n,s)})),i}async initialize(t){if(this.rpc=this.getRpcConfig(t),this.chainId=this.rpc.chains.length?g(this.rpc.chains):g(this.rpc.optionalChains),this.signer=await hv.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:t.disableProviderPing,relayUrl:t.relayUrl,storageOptions:t.storageOptions}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let s;try{const{WalletConnectModal:i}=await __webpack_require__.e(488).then(__webpack_require__.bind(__webpack_require__,3488));s=i}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(s)try{this.modal=new s(p({projectId:this.rpc.projectId},this.rpc.qrModalOptions))}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(t){if(!t)return;const{chains:s,optionalChains:i,rpcMap:n}=t;s&&(0,index_cjs.isValidArray)(s)&&(this.rpc.chains=s.map((e=>this.formatChainId(e))),s.forEach((e=>{this.rpc.rpcMap[e]=n?.[e]||this.getRpcUrl(e)}))),i&&(0,index_cjs.isValidArray)(i)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=i?.map((e=>this.formatChainId(e))),i.forEach((e=>{this.rpc.rpcMap[e]=n?.[e]||this.getRpcUrl(e)})))}getRpcUrl(t,s){var i;return((i=this.rpc.rpcMap)==null?void 0:i[t])||`${j}?chainId=eip155:${t}&projectId=${s||this.rpc.projectId}`}async loadPersistedSession(){if(!this.session)return;const t=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),s=this.session.namespaces[`${this.namespace}:${t}`]?this.session.namespaces[`${this.namespace}:${t}`]:this.session.namespaces[this.namespace];this.setChainIds(t?[this.formatChainId(t)]:s?.accounts),this.setAccounts(s?.accounts)}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(t){return typeof t=="string"||t instanceof String?[this.parseAccount(t)]:t.map((s=>this.parseAccount(s)))}}const G=null&&v;var lib=__webpack_require__(55065);const EthersConstantsUtil={WALLET_ID:"@w3m/wallet_id",ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3};const EthersHelpersUtil={getCaipDefaultChain(chain){if(!chain){return undefined}return{id:`${ConstantsUtil.EIP155}:${chain.chainId}`,name:chain.name,imageId:PresetsUtil.EIP155NetworkImageIds[chain.chainId]}},hexStringToNumber(value){const string=value.startsWith("0x")?value.slice(2):value;const number=parseInt(string,16);return number},numberToHexString(value){return`0x${value.toString(16)}`},async getUserInfo(provider){const[address,chainId]=await Promise.all([EthersHelpersUtil.getAddress(provider),EthersHelpersUtil.getChainId(provider)]);return{chainId,address}},async getChainId(provider){const chainId=await provider.request({method:"eth_chainId"});return Number(chainId)},async getAddress(provider){const[address]=await provider.request({method:"eth_accounts"});return address},async addEthereumChain(provider,chain){await provider.request({method:"wallet_addEthereumChain",params:[{chainId:EthersHelpersUtil.numberToHexString(chain.chainId),rpcUrls:[chain.rpcUrl],chainName:chain.name,nativeCurrency:{name:chain.currency,decimals:18,symbol:chain.currency},blockExplorerUrls:[chain.explorerUrl],iconUrls:[PresetsUtil.EIP155NetworkImageIds[chain.chainId]]}]})}};var utils=__webpack_require__(60052);var vanilla=__webpack_require__(9162);const state=(0,vanilla.sj)({provider:undefined,providerType:undefined,address:undefined,chainId:undefined,isConnected:false});const EthersStoreUtil={state,subscribeKey(key,callback){return(0,utils.VW)(state,key,callback)},subscribe(callback){return(0,vanilla.Ld)(state,(()=>callback(state)))},setProvider(provider){if(provider){state.provider=(0,vanilla.iH)(provider)}},setProviderType(providerType){state.providerType=providerType},setAddress(address){state.address=address},setChainId(chainId){state.chainId=chainId},setIsConnected(isConnected){state.isConnected=isConnected},setError(error){state.error=error},reset(){state.provider=undefined;state.address=undefined;state.chainId=undefined;state.providerType=undefined;state.isConnected=false;state.error=undefined}};class Web3Modal extends Web3ModalScaffold{constructor(options){const{ethersConfig,siweConfig,chains,defaultChain,tokens,chainImages,_sdkVersion,...w3mOptions}=options;if(!ethersConfig){throw new Error("web3modal:constructor - ethersConfig is undefined")}if(!w3mOptions.projectId){throw new Error("web3modal:constructor - projectId is undefined")}const networkControllerClient={switchCaipNetwork:async caipNetwork=>{const chainId=HelpersUtil.caipNetworkIdToNumber(caipNetwork?.id);if(chainId){try{await this.switchNetwork(chainId)}catch(error){EthersStoreUtil.setError(error);throw new Error("networkControllerClient:switchCaipNetwork - unable to switch chain")}}},getApprovedCaipNetworksData:async()=>new Promise((async resolve=>{const walletChoice=localStorage.getItem(EthersConstantsUtil.WALLET_ID);if(walletChoice?.includes(ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID)){const provider=await this.getWalletConnectProvider();if(!provider){throw new Error("networkControllerClient:getApprovedCaipNetworks - provider is undefined")}const ns=provider.signer?.session?.namespaces;const nsMethods=ns?.[ConstantsUtil.EIP155]?.methods;const nsChains=ns?.[ConstantsUtil.EIP155]?.chains;const result={supportsAllNetworks:nsMethods?.includes(ConstantsUtil.ADD_CHAIN_METHOD)??false,approvedCaipNetworkIds:nsChains};resolve(result)}else{const result={approvedCaipNetworkIds:undefined,supportsAllNetworks:true};resolve(result)}}))};const connectionControllerClient={connectWalletConnect:async onUri=>{const WalletConnectProvider=await this.getWalletConnectProvider();if(!WalletConnectProvider){throw new Error("connectionControllerClient:getWalletConnectUri - provider is undefined")}WalletConnectProvider.on("display_uri",(uri=>{onUri(uri)}));await WalletConnectProvider.connect();await this.setWalletConnectProvider()},connectExternal:async({id,info,provider})=>{if(id===ConstantsUtil.INJECTED_CONNECTOR_ID){const InjectedProvider=ethersConfig.injected;if(!InjectedProvider){throw new Error("connectionControllerClient:connectInjected - provider is undefined")}try{await InjectedProvider.request({method:"eth_requestAccounts"});this.setInjectedProvider(ethersConfig)}catch(error){EthersStoreUtil.setError(error)}}else if(id===ConstantsUtil.EIP6963_CONNECTOR_ID&&info&&provider){try{await provider.request({method:"eth_requestAccounts"})}catch(error){EthersStoreUtil.setError(error)}this.setEIP6963Provider(provider,info.name)}else if(id===ConstantsUtil.COINBASE_CONNECTOR_ID){const CoinbaseProvider=ethersConfig.coinbase;if(!CoinbaseProvider){throw new Error("connectionControllerClient:connectCoinbase - connector is undefined")}try{this.setCoinbaseProvider(ethersConfig);await CoinbaseProvider.request({method:"eth_requestAccounts"})}catch(error){EthersStoreUtil.setError(error)}}},checkInstalled(ids){if(!ids){return Boolean(window.ethereum)}if(ethersConfig.injected){if(!window?.ethereum){return false}}return ids.some((id=>Boolean(window.ethereum?.[String(id)])))},disconnect:async()=>{const provider=EthersStoreUtil.state.provider;const providerType=EthersStoreUtil.state.providerType;localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset();if(siweConfig?.options?.signOutOnDisconnect){await siweConfig.signOut()}if(providerType===ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID){const WalletConnectProvider=provider;await WalletConnectProvider.disconnect()}else if(provider){provider.emit("disconnect")}},signMessage:async message=>{const provider=EthersStoreUtil.state.provider;if(!provider){throw new Error("connectionControllerClient:signMessage - provider is undefined")}const signature=await provider.request({method:"personal_sign",params:[message,this.getAddress()]});return signature}};super({networkControllerClient,connectionControllerClient,siweControllerClient:siweConfig,defaultChain:EthersHelpersUtil.getCaipDefaultChain(defaultChain),tokens:HelpersUtil.getCaipTokens(tokens),_sdkVersion:_sdkVersion??`html-ethers5-${ConstantsUtil.VERSION}`,...w3mOptions});this.hasSyncedConnectedAccount=false;this.EIP6963Providers=[];this.options=undefined;this.options=options;this.metadata=ethersConfig.metadata;this.projectId=w3mOptions.projectId;this.chains=chains;this.createProvider();EthersStoreUtil.subscribeKey("address",(()=>{this.syncAccount()}));EthersStoreUtil.subscribeKey("chainId",(()=>{this.syncNetwork(chainImages)}));this.syncRequestedNetworks(chains,chainImages);this.syncConnectors(ethersConfig);if(ethersConfig.EIP6963){if(typeof window!=="undefined"){this.listenConnectors(ethersConfig.EIP6963);this.checkActive6963Provider()}}if(ethersConfig.injected){this.checkActiveInjectedProvider(ethersConfig)}if(ethersConfig.coinbase){this.checkActiveCoinbaseProvider(ethersConfig)}}getState(){const state=super.getState();return{...state,selectedNetworkId:HelpersUtil.caipNetworkIdToNumber(state.selectedNetworkId)}}subscribeState(callback){return super.subscribeState((state=>callback({...state,selectedNetworkId:HelpersUtil.caipNetworkIdToNumber(state.selectedNetworkId)})))}setAddress(address){const originalAddress=address?lib.utils.getAddress(address):undefined;EthersStoreUtil.setAddress(originalAddress)}getAddress(){const{address}=EthersStoreUtil.state;return address?lib.utils.getAddress(address):address}getError(){return EthersStoreUtil.state.error}getChainId(){return EthersStoreUtil.state.chainId}getIsConnected(){return EthersStoreUtil.state.isConnected}getWalletProvider(){return EthersStoreUtil.state.provider}getWalletProviderType(){return EthersStoreUtil.state.providerType}subscribeProvider(callback){return EthersStoreUtil.subscribe(callback)}async disconnect(){const{provider,providerType}=EthersStoreUtil.state;localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset();if(providerType==="injected"||providerType==="eip6963"){provider?.emit("disconnect")}else{await provider.disconnect()}}createProvider(){if(!this.walletConnectProviderInitPromise&&typeof window!=="undefined"){this.walletConnectProviderInitPromise=this.initWalletConnectProvider()}return this.walletConnectProviderInitPromise}async initWalletConnectProvider(){const walletConnectProviderOptions={projectId:this.projectId,showQrModal:false,rpcMap:this.chains?this.chains.reduce(((map,chain)=>{map[chain.chainId]=chain.rpcUrl;return map}),{}):{},optionalChains:[...this.chains.map((chain=>chain.chainId))],metadata:{name:this.metadata?this.metadata.name:"",description:this.metadata?this.metadata.description:"",url:this.metadata?this.metadata.url:"",icons:this.metadata?this.metadata.icons:[""]}};this.walletConnectProvider=await v.init(walletConnectProviderOptions);await this.checkActiveWalletConnectProvider()}async getWalletConnectProvider(){if(!this.walletConnectProvider){try{await this.createProvider()}catch(error){EthersStoreUtil.setError(error)}}return this.walletConnectProvider}syncRequestedNetworks(chains,chainImages){const requestedCaipNetworks=chains?.map((chain=>({id:`${ConstantsUtil.EIP155}:${chain.chainId}`,name:chain.name,imageId:PresetsUtil.EIP155NetworkImageIds[chain.chainId],imageUrl:chainImages?.[chain.chainId]})));this.setRequestedCaipNetworks(requestedCaipNetworks??[])}async checkActiveWalletConnectProvider(){const WalletConnectProvider=await this.getWalletConnectProvider();const walletId=localStorage.getItem(EthersConstantsUtil.WALLET_ID);if(WalletConnectProvider){if(walletId===ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID){await this.setWalletConnectProvider()}}}checkActiveInjectedProvider(config){const InjectedProvider=config.injected;const walletId=localStorage.getItem(EthersConstantsUtil.WALLET_ID);if(InjectedProvider){if(walletId===ConstantsUtil.INJECTED_CONNECTOR_ID){this.setInjectedProvider(config);this.watchInjected(config)}}}checkActiveCoinbaseProvider(config){const CoinbaseProvider=config.coinbase;const walletId=localStorage.getItem(EthersConstantsUtil.WALLET_ID);if(CoinbaseProvider){if(walletId===ConstantsUtil.COINBASE_CONNECTOR_ID){if(CoinbaseProvider._addresses&&CoinbaseProvider._addresses?.length>0){this.setCoinbaseProvider(config);this.watchCoinbase(config)}else{localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset()}}}}checkActive6963Provider(){const currentActiveWallet=window?.localStorage.getItem(EthersConstantsUtil.WALLET_ID);if(currentActiveWallet){const currentProvider=this.EIP6963Providers.find((provider=>provider.name===currentActiveWallet));if(currentProvider){this.setEIP6963Provider(currentProvider.provider,currentProvider.name)}}}async setWalletConnectProvider(){window?.localStorage.setItem(EthersConstantsUtil.WALLET_ID,ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID);const WalletConnectProvider=await this.getWalletConnectProvider();if(WalletConnectProvider){EthersStoreUtil.setChainId(WalletConnectProvider.chainId);EthersStoreUtil.setProviderType("walletConnect");EthersStoreUtil.setProvider(WalletConnectProvider);EthersStoreUtil.setIsConnected(true);this.setAddress(WalletConnectProvider.accounts?.[0]);this.watchWalletConnect()}}async setInjectedProvider(config){window?.localStorage.setItem(EthersConstantsUtil.WALLET_ID,ConstantsUtil.INJECTED_CONNECTOR_ID);const InjectedProvider=config.injected;if(InjectedProvider){const{address,chainId}=await EthersHelpersUtil.getUserInfo(InjectedProvider);if(address&&chainId){EthersStoreUtil.setChainId(chainId);EthersStoreUtil.setProviderType("injected");EthersStoreUtil.setProvider(config.injected);EthersStoreUtil.setIsConnected(true);this.setAddress(address);this.watchCoinbase(config)}}}async setEIP6963Provider(provider,name){window?.localStorage.setItem(EthersConstantsUtil.WALLET_ID,name);if(provider){const{address,chainId}=await EthersHelpersUtil.getUserInfo(provider);if(address&&chainId){EthersStoreUtil.setChainId(chainId);EthersStoreUtil.setProviderType("eip6963");EthersStoreUtil.setProvider(provider);EthersStoreUtil.setIsConnected(true);this.setAddress(address);this.watchEIP6963(provider)}}}async setCoinbaseProvider(config){window?.localStorage.setItem(EthersConstantsUtil.WALLET_ID,ConstantsUtil.COINBASE_CONNECTOR_ID);const CoinbaseProvider=config.coinbase;if(CoinbaseProvider){const{address,chainId}=await EthersHelpersUtil.getUserInfo(CoinbaseProvider);if(address&&chainId){EthersStoreUtil.setChainId(chainId);EthersStoreUtil.setProviderType("coinbaseWallet");EthersStoreUtil.setProvider(config.coinbase);EthersStoreUtil.setIsConnected(true);this.setAddress(address);this.watchCoinbase(config)}}}async watchWalletConnect(){const WalletConnectProvider=await this.getWalletConnectProvider();function disconnectHandler(){localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset();WalletConnectProvider?.removeListener("disconnect",disconnectHandler);WalletConnectProvider?.removeListener("accountsChanged",accountsChangedHandler);WalletConnectProvider?.removeListener("chainChanged",chainChangedHandler)}function chainChangedHandler(chainId){if(chainId){const chain=EthersHelpersUtil.hexStringToNumber(chainId);EthersStoreUtil.setChainId(chain)}}const accountsChangedHandler=async accounts=>{if(accounts.length>0){await this.setWalletConnectProvider()}};if(WalletConnectProvider){WalletConnectProvider.on("disconnect",disconnectHandler);WalletConnectProvider.on("accountsChanged",accountsChangedHandler);WalletConnectProvider.on("chainChanged",chainChangedHandler)}}watchInjected(config){const InjectedProvider=config.injected;function disconnectHandler(){localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset();InjectedProvider?.removeListener("disconnect",disconnectHandler);InjectedProvider?.removeListener("accountsChanged",accountsChangedHandler);InjectedProvider?.removeListener("chainChanged",chainChangedHandler)}function accountsChangedHandler(accounts){const currentAccount=accounts?.[0];if(currentAccount){EthersStoreUtil.setAddress(lib.utils.getAddress(currentAccount))}else{localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset()}}function chainChangedHandler(chainId){if(chainId){const chain=typeof chainId==="string"?EthersHelpersUtil.hexStringToNumber(chainId):Number(chainId);EthersStoreUtil.setChainId(chain)}}if(InjectedProvider){InjectedProvider.on("disconnect",disconnectHandler);InjectedProvider.on("accountsChanged",accountsChangedHandler);InjectedProvider.on("chainChanged",chainChangedHandler)}}watchEIP6963(provider){function disconnectHandler(){localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset();provider.removeListener("disconnect",disconnectHandler);provider.removeListener("accountsChanged",accountsChangedHandler);provider.removeListener("chainChanged",chainChangedHandler)}function accountsChangedHandler(accounts){const currentAccount=accounts?.[0];if(currentAccount){EthersStoreUtil.setAddress(lib.utils.getAddress(currentAccount))}else{localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset()}}function chainChangedHandler(chainId){if(chainId){const chain=typeof chainId==="string"?EthersHelpersUtil.hexStringToNumber(chainId):Number(chainId);EthersStoreUtil.setChainId(chain)}}provider.on("disconnect",disconnectHandler);provider.on("accountsChanged",accountsChangedHandler);provider.on("chainChanged",chainChangedHandler)}watchCoinbase(config){const CoinbaseProvider=config.coinbase;const walletId=localStorage.getItem(EthersConstantsUtil.WALLET_ID);function disconnectHandler(){localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset();CoinbaseProvider?.removeListener("disconnect",disconnectHandler);CoinbaseProvider?.removeListener("accountsChanged",accountsChangedHandler);CoinbaseProvider?.removeListener("chainChanged",chainChangedHandler)}function accountsChangedHandler(accounts){if(accounts.length===0){localStorage.removeItem(EthersConstantsUtil.WALLET_ID);EthersStoreUtil.reset()}else{EthersStoreUtil.setAddress(accounts[0])}}function chainChangedHandler(chainId){if(chainId&&walletId===ConstantsUtil.COINBASE_CONNECTOR_ID){const chain=Number(chainId);EthersStoreUtil.setChainId(chain)}}if(CoinbaseProvider){CoinbaseProvider.on("disconnect",disconnectHandler);CoinbaseProvider.on("accountsChanged",accountsChangedHandler);CoinbaseProvider.on("chainChanged",chainChangedHandler)}}async syncAccount(){const address=EthersStoreUtil.state.address;const chainId=EthersStoreUtil.state.chainId;const isConnected=EthersStoreUtil.state.isConnected;this.resetAccount();if(isConnected&&address&&chainId){const caipAddress=`${ConstantsUtil.EIP155}:${chainId}:${address}`;this.setIsConnected(isConnected);this.setCaipAddress(caipAddress);await Promise.all([this.syncProfile(address),this.syncBalance(address),this.getApprovedCaipNetworksData()]);this.hasSyncedConnectedAccount=true}else if(!isConnected&&this.hasSyncedConnectedAccount){this.resetWcConnection();this.resetNetwork()}}async syncNetwork(chainImages){const address=EthersStoreUtil.state.address;const chainId=EthersStoreUtil.state.chainId;const isConnected=EthersStoreUtil.state.isConnected;if(this.chains){const chain=this.chains.find((c=>c.chainId===chainId));if(chain){const caipChainId=`${ConstantsUtil.EIP155}:${chain.chainId}`;this.setCaipNetwork({id:caipChainId,name:chain.name,imageId:PresetsUtil.EIP155NetworkImageIds[chain.chainId],imageUrl:chainImages?.[chain.chainId]});if(isConnected&&address){const caipAddress=`${ConstantsUtil.EIP155}:${chainId}:${address}`;this.setCaipAddress(caipAddress);if(chain.explorerUrl){const url=`${chain.explorerUrl}/address/${address}`;this.setAddressExplorerUrl(url)}else{this.setAddressExplorerUrl(undefined)}if(this.hasSyncedConnectedAccount){await this.syncBalance(address)}}}else if(isConnected){this.setCaipNetwork({id:`${ConstantsUtil.EIP155}:${chainId}`})}}}async syncProfile(address){const chainId=EthersStoreUtil.state.chainId;if(chainId===1){const ensProvider=new lib.ethers.providers.InfuraProvider("mainnet");const name=await ensProvider.lookupAddress(address);const avatar=await ensProvider.getAvatar(address);if(name){this.setProfileName(name)}if(avatar){this.setProfileImage(avatar)}}else{this.setProfileName(null);this.setProfileImage(null)}}async syncBalance(address){const chainId=EthersStoreUtil.state.chainId;if(chainId&&this.chains){const chain=this.chains.find((c=>c.chainId===chainId));if(chain){const JsonRpcProvider=new lib.ethers.providers.JsonRpcProvider(chain.rpcUrl,{chainId,name:chain.name});if(JsonRpcProvider){const balance=await JsonRpcProvider.getBalance(address);const formattedBalance=lib.utils.formatEther(balance);this.setBalance(formattedBalance,chain.currency)}}}}async switchNetwork(chainId){const provider=EthersStoreUtil.state.provider;const providerType=EthersStoreUtil.state.providerType;if(this.chains){const chain=this.chains.find((c=>c.chainId===chainId));if(providerType===ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID&&chain){const WalletConnectProvider=provider;if(WalletConnectProvider){try{await WalletConnectProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:EthersHelpersUtil.numberToHexString(chain.chainId)}]});EthersStoreUtil.setChainId(chainId)}catch(switchError){if(switchError.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||switchError.code===EthersConstantsUtil.ERROR_CODE_DEFAULT||switchError?.data?.originalError?.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID){await EthersHelpersUtil.addEthereumChain(WalletConnectProvider,chain)}else{throw new Error("Chain is not supported")}}}}else if(providerType===ConstantsUtil.INJECTED_CONNECTOR_ID&&chain){const InjectedProvider=provider;if(InjectedProvider){try{await InjectedProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:EthersHelpersUtil.numberToHexString(chain.chainId)}]});EthersStoreUtil.setChainId(chain.chainId)}catch(switchError){if(switchError.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||switchError.code===EthersConstantsUtil.ERROR_CODE_DEFAULT||switchError?.data?.originalError?.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID){await EthersHelpersUtil.addEthereumChain(InjectedProvider,chain)}else{throw new Error("Chain is not supported")}}}}else if(providerType===ConstantsUtil.EIP6963_CONNECTOR_ID&&chain){const EIP6963Provider=provider;if(EIP6963Provider){try{await EIP6963Provider.request({method:"wallet_switchEthereumChain",params:[{chainId:EthersHelpersUtil.numberToHexString(chain.chainId)}]});EthersStoreUtil.setChainId(chain.chainId)}catch(switchError){if(switchError.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||switchError.code===EthersConstantsUtil.ERROR_CODE_DEFAULT||switchError?.data?.originalError?.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID){await EthersHelpersUtil.addEthereumChain(EIP6963Provider,chain)}else{throw new Error("Chain is not supported")}}}}else if(providerType===ConstantsUtil.COINBASE_CONNECTOR_ID&&chain){const CoinbaseProvider=provider;if(CoinbaseProvider){try{await CoinbaseProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:EthersHelpersUtil.numberToHexString(chain.chainId)}]});EthersStoreUtil.setChainId(chain.chainId)}catch(switchError){if(switchError.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||switchError.code===EthersConstantsUtil.ERROR_CODE_DEFAULT||switchError?.data?.originalError?.code===EthersConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID){await EthersHelpersUtil.addEthereumChain(CoinbaseProvider,chain)}}}}}}syncConnectors(config){const w3mConnectors=[];const connectorType=PresetsUtil.ConnectorTypesMap[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID];if(connectorType){w3mConnectors.push({id:ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID,explorerId:PresetsUtil.ConnectorExplorerIds[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID],imageId:PresetsUtil.ConnectorImageIds[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID],imageUrl:this.options?.connectorImages?.[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID],name:PresetsUtil.ConnectorNamesMap[ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID],type:connectorType})}if(config.injected){const injectedConnectorType=PresetsUtil.ConnectorTypesMap[ConstantsUtil.INJECTED_CONNECTOR_ID];if(injectedConnectorType){w3mConnectors.push({id:ConstantsUtil.INJECTED_CONNECTOR_ID,explorerId:PresetsUtil.ConnectorExplorerIds[ConstantsUtil.INJECTED_CONNECTOR_ID],imageId:PresetsUtil.ConnectorImageIds[ConstantsUtil.INJECTED_CONNECTOR_ID],imageUrl:this.options?.connectorImages?.[ConstantsUtil.INJECTED_CONNECTOR_ID],name:PresetsUtil.ConnectorNamesMap[ConstantsUtil.INJECTED_CONNECTOR_ID],type:injectedConnectorType})}}if(config.coinbase){w3mConnectors.push({id:ConstantsUtil.COINBASE_CONNECTOR_ID,explorerId:PresetsUtil.ConnectorExplorerIds[ConstantsUtil.COINBASE_CONNECTOR_ID],imageId:PresetsUtil.ConnectorImageIds[ConstantsUtil.COINBASE_CONNECTOR_ID],imageUrl:this.options?.connectorImages?.[ConstantsUtil.COINBASE_CONNECTOR_ID],name:PresetsUtil.ConnectorNamesMap[ConstantsUtil.COINBASE_CONNECTOR_ID],type:"EXTERNAL"})}this.setConnectors(w3mConnectors)}eip6963EventHandler(event){if(event.detail){const{info,provider}=event.detail;const connectors=this.getConnectors();const existingConnector=connectors.find((c=>c.name===info.name));if(!existingConnector){const type=PresetsUtil.ConnectorTypesMap[ConstantsUtil.EIP6963_CONNECTOR_ID];if(type){this.addConnector({id:ConstantsUtil.EIP6963_CONNECTOR_ID,type,imageUrl:info.icon??this.options?.connectorImages?.[ConstantsUtil.EIP6963_CONNECTOR_ID],name:info.name,provider,info});const eip6963ProviderObj={name:info.name,provider};this.EIP6963Providers.push(eip6963ProviderObj)}}}}listenConnectors(enableEIP6963){if(typeof window!=="undefined"&&enableEIP6963){const handler=this.eip6963EventHandler.bind(this);window.addEventListener(ConstantsUtil.EIP6963_ANNOUNCE_EVENT,handler);window.dispatchEvent(new Event(ConstantsUtil.EIP6963_REQUEST_EVENT))}}}var react=__webpack_require__(47182);let modal=undefined;function getWeb3Modal(web3modal){if(web3modal){modal=web3modal}}function useWeb3ModalTheme(){if(!modal){throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook')}function setThemeMode(themeMode){modal?.setThemeMode(themeMode)}function setThemeVariables(themeVariables){modal?.setThemeVariables(themeVariables)}const[themeMode,setInternalThemeMode]=(0,react.useState)(modal.getThemeMode());const[themeVariables,setInternalThemeVariables]=(0,react.useState)(modal.getThemeVariables());(0,react.useEffect)((()=>{const unsubscribe=modal?.subscribeTheme((state=>{setInternalThemeMode(state.themeMode);setInternalThemeVariables(state.themeVariables)}));return()=>{unsubscribe?.()}}),[]);return{themeMode,themeVariables,setThemeMode,setThemeVariables}}function useWeb3Modal(){if(!modal){throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook')}async function open(options){await(modal?.open(options))}async function close(){await(modal?.close())}return{open,close}}function useWeb3ModalState(){if(!modal){throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook')}const[state,setState]=(0,react.useState)(modal.getState());(0,react.useEffect)((()=>{const unsubscribe=modal?.subscribeState((newState=>{setState({...newState})}));return()=>{unsubscribe?.()}}),[]);return state}function useWeb3ModalEvents(){if(!modal){throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook')}const[event,setEvents]=(0,react.useState)(modal.getEvent());(0,react.useEffect)((()=>{const unsubscribe=modal?.subscribeEvents((newEvent=>{setEvents({...newEvent})}));return()=>{unsubscribe?.()}}),[]);return event}var index_modern=__webpack_require__(75308);var shim=__webpack_require__(52854);const{use}=react;const{useSyncExternalStore}=shim;const useAffectedDebugValue=(state,affected)=>{const pathList=(0,react.useRef)();(0,react.useEffect)((()=>{pathList.current=(0,index_modern.h8)(state,affected,true)}));(0,react.useDebugValue)(pathList.current)};const targetCache=new WeakMap;function useSnapshot(proxyObject,options){const notifyInSync=options==null?void 0:options.sync;const lastSnapshot=(0,react.useRef)();const lastAffected=(0,react.useRef)();let inRender=true;const currSnapshot=useSyncExternalStore((0,react.useCallback)((callback=>{const unsub=(0,vanilla.Ld)(proxyObject,callback,notifyInSync);callback();return unsub}),[proxyObject,notifyInSync]),(()=>{const nextSnapshot=(0,vanilla.CO)(proxyObject,use);try{if(!inRender&&lastSnapshot.current&&lastAffected.current&&!(0,index_modern.ln)(lastSnapshot.current,nextSnapshot,lastAffected.current,new WeakMap)){return lastSnapshot.current}}catch(e){}return nextSnapshot}),(()=>(0,vanilla.CO)(proxyObject,use)));inRender=false;const currAffected=new WeakMap;(0,react.useEffect)((()=>{lastSnapshot.current=currSnapshot;lastAffected.current=currAffected}));if((false?0:void 0)!=="production"){useAffectedDebugValue(currSnapshot,currAffected)}const proxyCache=(0,react.useMemo)((()=>new WeakMap),[]);return(0,index_modern.DM)(currSnapshot,currAffected,proxyCache,targetCache)}var buffer=__webpack_require__(40144);if(typeof window!=="undefined"){if(!window.Buffer){window.Buffer=buffer.Buffer}if(!window.global){window.global=window}if(!window.process){window.process={}}if(!window.process?.env){window.process={env:{}}}}var dist=__webpack_require__(69850);function defaultConfig(options){const{enableEIP6963=true,enableInjected=true,enableCoinbase=true,metadata,rpcUrl,defaultChainId}=options;let injectedProvider=undefined;let coinbaseProvider=undefined;const providers={metadata};function getInjectedProvider(){if(injectedProvider){return injectedProvider}if(typeof window==="undefined"){return undefined}if(!window.ethereum){return undefined}injectedProvider=window.ethereum;return injectedProvider}function getCoinbaseProvider(){if(coinbaseProvider){return coinbaseProvider}if(typeof window==="undefined"){return undefined}const coinbaseWallet=new dist.jp({appName:metadata.name,appLogoUrl:metadata.icons[0],darkMode:false,enableMobileWalletLink:true});coinbaseProvider=coinbaseWallet.makeWeb3Provider(rpcUrl,defaultChainId);return coinbaseProvider}if(enableInjected){providers.injected=getInjectedProvider()}if(enableCoinbase&&rpcUrl&&defaultChainId){providers.coinbase=getCoinbaseProvider()}if(enableEIP6963){providers.EIP6963=true}return providers}"use client";let react_modal=undefined;function createWeb3Modal(options){if(!react_modal){react_modal=new Web3Modal({...options,_sdkVersion:`react-ethers5-${ConstantsUtil.VERSION}`})}getWeb3Modal(react_modal);return react_modal}function useWeb3ModalProvider(){const{provider,providerType}=useSnapshot(EthersStoreUtil.state);const walletProvider=provider;const walletProviderType=providerType;return{walletProvider,walletProviderType}}function useDisconnect(){async function disconnect(){await(react_modal?.disconnect())}return{disconnect}}function useWeb3ModalAccount(){const{address,isConnected,chainId}=useSnapshot(EthersStoreUtil.state);return{address,isConnected,chainId}}function useWeb3ModalError(){const{error}=useSnapshot(EthersStoreUtil.state);return{error}}},58014:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{W3mModal:()=>W3mModal});var esm=__webpack_require__(84538);var dist_esm=__webpack_require__(17706);var lit=__webpack_require__(46751);var decorators=__webpack_require__(83187);const styles=lit.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const SCROLL_LOCK="scroll-lock";let W3mModal=class W3mModal extends lit.oi{constructor(){super();this.unsubscribe=[];this.abortController=undefined;this.open=esm.IN.state.open;this.caipAddress=esm.Ni.state.caipAddress;this.isSiweEnabled=esm.yD.state.isSiweEnabled;this.initializeTheming();esm.QT.prefetch();this.unsubscribe.push(esm.IN.subscribeKey("open",(val=>val?this.onOpen():this.onClose())),esm.yD.subscribeKey("isSiweEnabled",(isEnabled=>{this.isSiweEnabled=isEnabled})),esm.Ni.subscribe((newAccountState=>this.onNewAccountState(newAccountState))));esm.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((unsubscribe=>unsubscribe()));this.onRemoveKeyboardListener()}render(){return this.open?lit.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(event){if(event.target===event.currentTarget){await this.handleClose()}}async handleClose(){if(this.isSiweEnabled&&esm.yD.state.status!=="success"){await esm.lZ.disconnect()}esm.IN.close()}initializeTheming(){const{themeVariables,themeMode}=esm.u0.state;const defaultThemeMode=dist_esm.UiHelperUtil.getColorTheme(themeMode);(0,dist_esm.initializeTheming)(themeVariables,defaultThemeMode)}async onClose(){this.onScrollUnlock();await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished;esm.KC.hide();this.open=false;this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock();this.open=true;await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished;this.onAddKeyboardListener()}onScrollLock(){const styleTag=document.createElement("style");styleTag.dataset["w3m"]=SCROLL_LOCK;styleTag.textContent=`\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    `;document.head.appendChild(styleTag)}onScrollUnlock(){const styleTag=document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);if(styleTag){styleTag.remove()}}onAddKeyboardListener(){this.abortController=new AbortController;const card=this.shadowRoot?.querySelector("wui-card");card?.focus();window.addEventListener("keydown",(event=>{if(event.key==="Escape"){this.handleClose()}else if(event.key==="Tab"){const{tagName}=event.target;if(tagName&&!tagName.includes("W3M-")&&!tagName.includes("WUI-")){card?.focus()}}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort();this.abortController=undefined}async onNewAccountState(newState){const{isConnected,caipAddress:newCaipAddress}=newState;if(this.isSiweEnabled){if(isConnected&&!this.caipAddress){this.caipAddress=newCaipAddress}if(isConnected&&newCaipAddress&&this.caipAddress!==newCaipAddress){await esm.yD.signOut();this.onSiweNavigation();this.caipAddress=newCaipAddress}try{const session=await esm.yD.getSession();if(session&&!isConnected){await esm.yD.signOut()}else if(isConnected&&!session){this.onSiweNavigation()}}catch(error){if(isConnected){this.onSiweNavigation()}}}}onSiweNavigation(){if(this.open){esm.Pc.push("ConnectingSiwe")}else{esm.IN.open({view:"ConnectingSiwe"})}}};W3mModal.styles=styles;__decorate([(0,decorators.SB)()],W3mModal.prototype,"open",void 0);__decorate([(0,decorators.SB)()],W3mModal.prototype,"caipAddress",void 0);__decorate([(0,decorators.SB)()],W3mModal.prototype,"isSiweEnabled",void 0);W3mModal=__decorate([(0,dist_esm.customElement)("w3m-modal")],W3mModal)},17706:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{TransactionUtil:()=>TransactionUtil,UiHelperUtil:()=>UiHelperUtil,WuiAccountButton:()=>WuiAccountButton,WuiAllWalletsImage:()=>WuiAllWalletsImage,WuiAvatar:()=>WuiAvatar,WuiButton:()=>WuiButton,WuiCard:()=>WuiCard,WuiCardSelect:()=>WuiCardSelect,WuiCardSelectLoader:()=>WuiCardSelectLoader,WuiChip:()=>WuiChip,WuiConnectButton:()=>WuiConnectButton,WuiCtaButton:()=>WuiCtaButton,WuiEmailInput:()=>WuiEmailInput,WuiFlex:()=>WuiFlex,WuiGrid:()=>WuiGrid,WuiIcon:()=>WuiIcon,WuiIconBox:()=>WuiIconBox,WuiIconLink:()=>WuiIconLink,WuiImage:()=>WuiImage,WuiInputElement:()=>WuiInputElement,WuiInputNumeric:()=>WuiInputNumeric,WuiInputText:()=>WuiInputText,WuiLink:()=>WuiLink,WuiListAccordion:()=>WuiListAccordion,WuiListContent:()=>WuiListContent,WuiListItem:()=>WuiListItem,WuiListNetwork:()=>WuiListNetwork,WuiListWallet:()=>WuiListWallet,WuiListWalletTransaction:()=>WuiListWalletTransaction,WuiLoadingHexagon:()=>WuiLoadingHexagon,WuiLoadingSpinner:()=>WuiLoadingSpinner,WuiLoadingThumbnail:()=>WuiLoadingThumbnail,WuiLogo:()=>WuiLogo,WuiLogoSelect:()=>WuiLogoSelect,WuiNetworkButton:()=>WuiNetworkButton,WuiNetworkImage:()=>WuiNetworkImage,WuiNoticeCard:()=>WuiNoticeCard,WuiOtp:()=>WuiOtp,WuiQrCode:()=>WuiQrCode,WuiSearchBar:()=>WuiSearchBar,WuiSeparator:()=>WuiSeparator,WuiShimmer:()=>WuiShimmer,WuiSnackbar:()=>WuiSnackbar,WuiTabs:()=>WuiTabs,WuiTag:()=>WuiTag,WuiText:()=>WuiText,WuiTooltip:()=>WuiTooltip,WuiTransactionListItem:()=>WuiTransactionListItem,WuiTransactionListItemLoader:()=>WuiTransactionListItemLoader,WuiTransactionVisual:()=>WuiTransactionVisual,WuiVisual:()=>WuiVisual,WuiVisualThumbnail:()=>WuiVisualThumbnail,WuiWalletImage:()=>WuiWalletImage,customElement:()=>customElement,initializeTheming:()=>initializeTheming,setColorTheme:()=>setColorTheme,setThemeVariables:()=>setThemeVariables});var lit=__webpack_require__(46751);let themeTag=undefined;let darkModeTag=undefined;let lightModeTag=undefined;function initializeTheming(themeVariables,themeMode){themeTag=document.createElement("style");darkModeTag=document.createElement("style");lightModeTag=document.createElement("style");themeTag.textContent=createRootStyles(themeVariables).core.cssText;darkModeTag.textContent=createRootStyles(themeVariables).dark.cssText;lightModeTag.textContent=createRootStyles(themeVariables).light.cssText;document.head.appendChild(themeTag);document.head.appendChild(darkModeTag);document.head.appendChild(lightModeTag);setColorTheme(themeMode)}function setColorTheme(themeMode){if(darkModeTag&&lightModeTag){if(themeMode==="light"){darkModeTag.removeAttribute("media");lightModeTag.media="enabled"}else{lightModeTag.removeAttribute("media");darkModeTag.media="enabled"}}}function setThemeVariables(themeVariables){if(themeTag&&darkModeTag&&lightModeTag){themeTag.textContent=createRootStyles(themeVariables).core.cssText;darkModeTag.textContent=createRootStyles(themeVariables).dark.cssText;lightModeTag.textContent=createRootStyles(themeVariables).light.cssText}}function createRootStyles(themeVariables){return{core:lit.iv`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,lit.$m)(themeVariables?.["--w3m-color-mix-strength"]?`${themeVariables["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,lit.$m)(themeVariables?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,lit.$m)(themeVariables?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,lit.$m)(themeVariables?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,lit.$m)(themeVariables?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:lit.iv`
      :root {
        --w3m-color-mix: ${(0,lit.$m)(themeVariables?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,lit.$m)(themeVariables?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:lit.iv`
      :root {
        --w3m-color-mix: ${(0,lit.$m)(themeVariables?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,lit.$m)(themeVariables?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const resetStyles=lit.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`;const elementStyles=lit.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;const colorStyles=lit.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function standardCustomElement(tagName,descriptor){const{kind,elements}=descriptor;return{kind,elements,finisher(clazz){if(!customElements.get(tagName)){customElements.define(tagName,clazz)}}}}function legacyCustomElement(tagName,clazz){if(!customElements.get(tagName)){customElements.define(tagName,clazz)}return clazz}function customElement(tagName){return function create(classOrDescriptor){return typeof classOrDescriptor==="function"?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor)}}const styles=lit.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCard=class WuiCard extends lit.oi{render(){return lit.dy`<slot></slot>`}};WuiCard.styles=[resetStyles,styles];WuiCard=__decorate([customElement("wui-card")],WuiCard);var decorators=__webpack_require__(83187);const wui_icon_styles=lit.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;const allWalletsSvg=lit.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;const appStoreSvg=lit.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`;const appleSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;const arrowBottomSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;const arrowLeftSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;const arrowRightSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;const arrowTopSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;const browserSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`;const checkmarkSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`;const chevronBottomSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;const chevronLeftSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;const chevronRightSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;const chevronTopSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;const chromeStoreSvg=lit.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`;const clockSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;const closeSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;const coinPlaceholderSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;const compassSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;const copySvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`;const cursorSvg=lit.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;const desktopSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;const disconnectSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;const discordSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;const etherscanSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;const extensionSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;const externalLinkSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;const facebookSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;const filtersSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;const githubSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;const googleSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;const helpCircleSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`;const infoCircleSvg=lit.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`;const mailSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;const mobileSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;const networkPlaceholderSvg=lit.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`;const nftPlaceholderSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;const offSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;const playStoreSvg=lit.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`;const qrCodeIcon=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;const refreshSvg=lit.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;const searchSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;const swapHorizontalSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;const swapHorizontalBoldSvg=lit.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;const swapVerticalSvg=lit.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;const telegramSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `;const twitchSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;const twitterSvg=lit.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;const twitterIconSvg=lit.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;const verifySvg=lit.YP`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;const verifyFilledSvg=lit.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;const walletPlaceholderSvg=lit.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;const walletSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;const walletConnectSvg=lit.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`;const warningCircleSvg=lit.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;const alphaSvg=lit.YP`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`;var wui_icon_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const svgOptions={allWallets:allWalletsSvg,alpha:alphaSvg,appStore:appStoreSvg,chromeStore:chromeStoreSvg,apple:appleSvg,arrowBottom:arrowBottomSvg,arrowLeft:arrowLeftSvg,arrowRight:arrowRightSvg,arrowTop:arrowTopSvg,browser:browserSvg,checkmark:checkmarkSvg,chevronBottom:chevronBottomSvg,chevronLeft:chevronLeftSvg,chevronRight:chevronRightSvg,chevronTop:chevronTopSvg,clock:clockSvg,close:closeSvg,compass:compassSvg,coinPlaceholder:coinPlaceholderSvg,copy:copySvg,cursor:cursorSvg,desktop:desktopSvg,disconnect:disconnectSvg,discord:discordSvg,etherscan:etherscanSvg,extension:extensionSvg,externalLink:externalLinkSvg,facebook:facebookSvg,filters:filtersSvg,github:githubSvg,google:googleSvg,helpCircle:helpCircleSvg,infoCircle:infoCircleSvg,mail:mailSvg,mobile:mobileSvg,networkPlaceholder:networkPlaceholderSvg,nftPlaceholder:nftPlaceholderSvg,off:offSvg,playStore:playStoreSvg,qrCode:qrCodeIcon,refresh:refreshSvg,search:searchSvg,swapHorizontal:swapHorizontalSvg,swapHorizontalBold:swapHorizontalBoldSvg,swapVertical:swapVerticalSvg,telegram:telegramSvg,twitch:twitchSvg,twitter:twitterSvg,twitterIcon:twitterIconSvg,verify:verifySvg,verifyFilled:verifyFilledSvg,wallet:walletSvg,walletConnect:walletConnectSvg,walletPlaceholder:walletPlaceholderSvg,warningCircle:warningCircleSvg};let WuiIcon=class WuiIcon extends lit.oi{constructor(){super(...arguments);this.size="md";this.name="copy";this.color="fg-300"}render(){this.style.cssText=`\n      --local-color: ${`var(--wui-color-${this.color});`}\n      --local-width: ${`var(--wui-icon-size-${this.size});`}\n    `;return lit.dy`${svgOptions[this.name]}`}};WuiIcon.styles=[resetStyles,colorStyles,wui_icon_styles];wui_icon_decorate([(0,decorators.Cb)()],WuiIcon.prototype,"size",void 0);wui_icon_decorate([(0,decorators.Cb)()],WuiIcon.prototype,"name",void 0);wui_icon_decorate([(0,decorators.Cb)()],WuiIcon.prototype,"color",void 0);WuiIcon=wui_icon_decorate([customElement("wui-icon")],WuiIcon);const wui_image_styles=lit.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var wui_image_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiImage=class WuiImage extends lit.oi{constructor(){super(...arguments);this.src="./path/to/image.jpg";this.alt="Image"}render(){return lit.dy`<img src=${this.src} alt=${this.alt} />`}};WuiImage.styles=[resetStyles,colorStyles,wui_image_styles];wui_image_decorate([(0,decorators.Cb)()],WuiImage.prototype,"src",void 0);wui_image_decorate([(0,decorators.Cb)()],WuiImage.prototype,"alt",void 0);WuiImage=wui_image_decorate([customElement("wui-image")],WuiImage);const wui_loading_hexagon_styles=lit.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var wui_loading_hexagon_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLoadingHexagon=class WuiLoadingHexagon extends lit.oi{render(){return lit.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};WuiLoadingHexagon.styles=[resetStyles,wui_loading_hexagon_styles];WuiLoadingHexagon=wui_loading_hexagon_decorate([customElement("wui-loading-hexagon")],WuiLoadingHexagon);const wui_loading_spinner_styles=lit.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var wui_loading_spinner_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLoadingSpinner=class WuiLoadingSpinner extends lit.oi{constructor(){super(...arguments);this.color="accent-100";this.size="lg"}render(){this.style.cssText=`--local-color: var(--wui-color-${this.color});`;this.dataset["size"]=this.size;return lit.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};WuiLoadingSpinner.styles=[resetStyles,wui_loading_spinner_styles];wui_loading_spinner_decorate([(0,decorators.Cb)()],WuiLoadingSpinner.prototype,"color",void 0);wui_loading_spinner_decorate([(0,decorators.Cb)()],WuiLoadingSpinner.prototype,"size",void 0);WuiLoadingSpinner=wui_loading_spinner_decorate([customElement("wui-loading-spinner")],WuiLoadingSpinner);const wui_loading_thumbnail_styles=lit.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var wui_loading_thumbnail_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLoadingThumbnail=class WuiLoadingThumbnail extends lit.oi{constructor(){super(...arguments);this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const radius=this.radius>50?50:this.radius;const standardValue=36;const radiusFactor=standardValue-radius;const dashArrayStart=116+radiusFactor;const dashArrayEnd=245+radiusFactor;const dashOffset=360+radiusFactor*1.75;return lit.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${dashArrayStart} ${dashArrayEnd}"
          stroke-dashoffset=${dashOffset}
        />
      </svg>
    `}};WuiLoadingThumbnail.styles=[resetStyles,wui_loading_thumbnail_styles];wui_loading_thumbnail_decorate([(0,decorators.Cb)({type:Number})],WuiLoadingThumbnail.prototype,"radius",void 0);WuiLoadingThumbnail=wui_loading_thumbnail_decorate([customElement("wui-loading-thumbnail")],WuiLoadingThumbnail);const wui_shimmer_styles=lit.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var wui_shimmer_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiShimmer=class WuiShimmer extends lit.oi{constructor(){super(...arguments);this.width="";this.height="";this.borderRadius="m"}render(){this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};\n    `;return lit.dy`<slot></slot>`}};WuiShimmer.styles=[wui_shimmer_styles];wui_shimmer_decorate([(0,decorators.Cb)()],WuiShimmer.prototype,"width",void 0);wui_shimmer_decorate([(0,decorators.Cb)()],WuiShimmer.prototype,"height",void 0);wui_shimmer_decorate([(0,decorators.Cb)()],WuiShimmer.prototype,"borderRadius",void 0);WuiShimmer=wui_shimmer_decorate([customElement("wui-shimmer")],WuiShimmer);var lit_html=__webpack_require__(80990);var directive=__webpack_require__(24885);const e=(0,directive.XM)(class extends directive.Xe{constructor(t){if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.it){this.it=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.it)t in i||(r.remove(t),this.it.delete(t));for(const t in i){const s=!!i[t];s===this.it.has(t)||this.st?.has(t)||(s?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return lit_html.Jb}});const wui_text_styles=lit.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var wui_text_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiText=class WuiText extends lit.oi{constructor(){super(...arguments);this.variant="paragraph-500";this.color="fg-300";this.align="left"}render(){const classes={[`wui-font-${this.variant}`]:true,[`wui-color-${this.color}`]:true};this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `;return lit.dy`<slot class=${e(classes)}></slot>`}};WuiText.styles=[resetStyles,wui_text_styles];wui_text_decorate([(0,decorators.Cb)()],WuiText.prototype,"variant",void 0);wui_text_decorate([(0,decorators.Cb)()],WuiText.prototype,"color",void 0);wui_text_decorate([(0,decorators.Cb)()],WuiText.prototype,"align",void 0);WuiText=wui_text_decorate([customElement("wui-text")],WuiText);const browser_browserSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `;const daoSvg=lit.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;const defiSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`;const defiAltSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `;const ethSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `;const layersSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`;const lockSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`;const loginSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `;const networkSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`;const nftSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `;const nounSvg=lit.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`;const profileSvg=lit.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `;const systemSvg=lit.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;const wui_visual_styles=lit.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var wui_visual_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const wui_visual_svgOptions={browser:browser_browserSvg,dao:daoSvg,defi:defiSvg,defiAlt:defiAltSvg,eth:ethSvg,layers:layersSvg,lock:lockSvg,login:loginSvg,network:networkSvg,nft:nftSvg,noun:nounSvg,profile:profileSvg,system:systemSvg};let WuiVisual=class WuiVisual extends lit.oi{constructor(){super(...arguments);this.name="browser"}render(){return lit.dy`${wui_visual_svgOptions[this.name]}`}};WuiVisual.styles=[resetStyles,wui_visual_styles];wui_visual_decorate([(0,decorators.Cb)()],WuiVisual.prototype,"name",void 0);WuiVisual=wui_visual_decorate([customElement("wui-visual")],WuiVisual);var if_defined=__webpack_require__(3001);const UiHelperUtil={getSpacingStyles(spacing,index){if(Array.isArray(spacing)){return spacing[index]?`var(--wui-spacing-${spacing[index]})`:undefined}else if(typeof spacing==="string"){return`var(--wui-spacing-${spacing})`}return undefined},getFormattedDate(date){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(date)},getHostName(url){const newUrl=new URL(url);return newUrl.hostname},getTruncateString({string,charsStart,charsEnd,truncate}){if(string.length<=charsStart+charsEnd){return string}if(truncate==="end"){return`${string.substring(0,charsStart)}...`}else if(truncate==="start"){return`...${string.substring(string.length-charsEnd)}`}return`${string.substring(0,Math.floor(charsStart))}...${string.substring(string.length-Math.floor(charsEnd))}`},generateAvatarColors(address){const hash=address.toLowerCase().replace(/^0x/iu,"");const baseColor=hash.substring(0,6);const rgbColor=this.hexToRgb(baseColor);const masterBorderRadius=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master");const radius=Number(masterBorderRadius?.replace("px",""));const edge=100-3*radius;const gradientCircle=`${edge}% ${edge}% at 65% 40%`;const colors=[];for(let i=0;i<5;i+=1){const tintedColor=this.tintColor(rgbColor,.15*i);colors.push(`rgb(${tintedColor[0]}, ${tintedColor[1]}, ${tintedColor[2]})`)}return`\n    --local-color-1: ${colors[0]};\n    --local-color-2: ${colors[1]};\n    --local-color-3: ${colors[2]};\n    --local-color-4: ${colors[3]};\n    --local-color-5: ${colors[4]};\n    --local-radial-circle: ${gradientCircle}\n   `},hexToRgb(hex){const bigint=parseInt(hex,16);const r=bigint>>16&255;const g=bigint>>8&255;const b=bigint&255;return[r,g,b]},tintColor(rgb,tint){const[r,g,b]=rgb;const tintedR=Math.round(r+(255-r)*tint);const tintedG=Math.round(g+(255-g)*tint);const tintedB=Math.round(b+(255-b)*tint);return[tintedR,tintedG,tintedB]},isNumber(character){const regex={number:/^[0-9]+$/u};return regex.number.test(character)},getColorTheme(theme){if(theme){return theme}else if(typeof window!=="undefined"&&window.matchMedia){if(window.matchMedia("(prefers-color-scheme: dark)").matches){return"dark"}return"light"}return"dark"}};const wui_flex_styles=lit.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var wui_flex_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiFlex=class WuiFlex extends lit.oi{render(){this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,3)};\n    `;return lit.dy`<slot></slot>`}};WuiFlex.styles=[resetStyles,wui_flex_styles];wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"flexDirection",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"flexWrap",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"flexBasis",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"flexGrow",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"flexShrink",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"alignItems",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"justifyContent",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"columnGap",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"rowGap",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"gap",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"padding",void 0);wui_flex_decorate([(0,decorators.Cb)()],WuiFlex.prototype,"margin",void 0);WuiFlex=wui_flex_decorate([customElement("wui-flex")],WuiFlex);const wui_avatar_styles=lit.iv`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var wui_avatar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiAvatar=class WuiAvatar extends lit.oi{constructor(){super(...arguments);this.imageSrc=undefined;this.alt=undefined;this.address=undefined}render(){return lit.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc){this.dataset["variant"]="image";return lit.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`}else if(this.address){this.dataset["variant"]="generated";const cssColors=UiHelperUtil.generateAvatarColors(this.address);this.style.cssText=cssColors;return null}this.dataset["variant"]="default";return null}};WuiAvatar.styles=[resetStyles,wui_avatar_styles];wui_avatar_decorate([(0,decorators.Cb)()],WuiAvatar.prototype,"imageSrc",void 0);wui_avatar_decorate([(0,decorators.Cb)()],WuiAvatar.prototype,"alt",void 0);wui_avatar_decorate([(0,decorators.Cb)()],WuiAvatar.prototype,"address",void 0);WuiAvatar=wui_avatar_decorate([customElement("wui-avatar")],WuiAvatar);const wui_icon_box_styles=lit.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var wui_icon_box_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiIconBox=class WuiIconBox extends lit.oi{constructor(){super(...arguments);this.size="md";this.backgroundColor="accent-100";this.iconColor="accent-100";this.background="transparent";this.border=false;this.borderColor="wui-color-bg-125";this.icon="copy"}render(){const iconSize=this.iconSize||this.size;const isLg=this.size==="lg";const isXl=this.size==="xl";const bgMix=isLg?"12%":"16%";const borderRadius=isLg?"xxs":isXl?"s":"3xl";const isGray=this.background==="gray";const isOpaque=this.background==="opaque";const isColorChange=this.backgroundColor==="accent-100"&&isOpaque||this.backgroundColor==="success-100"&&isOpaque||this.backgroundColor==="error-100"&&isOpaque||this.backgroundColor==="inverse-100"&&isOpaque;let bgValueVariable=`var(--wui-color-${this.backgroundColor})`;if(isColorChange){bgValueVariable=`var(--wui-icon-box-bg-${this.backgroundColor})`}else if(isGray){bgValueVariable=`var(--wui-gray-${this.backgroundColor})`}this.style.cssText=`\n       --local-bg-value: ${bgValueVariable};\n       --local-bg-mix: ${isColorChange||isGray?`100%`:bgMix};\n       --local-border-radius: var(--wui-border-radius-${borderRadius});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${this.borderColor==="wui-color-bg-125"?`2px`:`1px`} solid ${this.border?`var(--${this.borderColor})`:`transparent`}\n   `;return lit.dy` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `}};WuiIconBox.styles=[resetStyles,elementStyles,wui_icon_box_styles];wui_icon_box_decorate([(0,decorators.Cb)()],WuiIconBox.prototype,"size",void 0);wui_icon_box_decorate([(0,decorators.Cb)()],WuiIconBox.prototype,"backgroundColor",void 0);wui_icon_box_decorate([(0,decorators.Cb)()],WuiIconBox.prototype,"iconColor",void 0);wui_icon_box_decorate([(0,decorators.Cb)()],WuiIconBox.prototype,"iconSize",void 0);wui_icon_box_decorate([(0,decorators.Cb)()],WuiIconBox.prototype,"background",void 0);wui_icon_box_decorate([(0,decorators.Cb)({type:Boolean})],WuiIconBox.prototype,"border",void 0);wui_icon_box_decorate([(0,decorators.Cb)()],WuiIconBox.prototype,"borderColor",void 0);wui_icon_box_decorate([(0,decorators.Cb)()],WuiIconBox.prototype,"icon",void 0);WuiIconBox=wui_icon_box_decorate([customElement("wui-icon-box")],WuiIconBox);const wui_account_button_styles=lit.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var wui_account_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiAccountButton=class WuiAccountButton extends lit.oi{constructor(){super(...arguments);this.networkSrc=undefined;this.avatarSrc=undefined;this.balance=undefined;this.isUnsupportedChain=undefined;this.disabled=false;this.isProfileName=false;this.address="";this.charsStart=4;this.charsEnd=6}render(){return lit.dy`
      <button
        ?disabled=${this.disabled}
        class=${(0,if_defined.o)(this.balance?undefined:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${UiHelperUtil.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain){return lit.dy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`}if(this.balance){const networkElement=this.networkSrc?lit.dy`<wui-image src=${this.networkSrc}></wui-image>`:lit.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return lit.dy`
        ${networkElement}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};WuiAccountButton.styles=[resetStyles,elementStyles,wui_account_button_styles];wui_account_button_decorate([(0,decorators.Cb)()],WuiAccountButton.prototype,"networkSrc",void 0);wui_account_button_decorate([(0,decorators.Cb)()],WuiAccountButton.prototype,"avatarSrc",void 0);wui_account_button_decorate([(0,decorators.Cb)()],WuiAccountButton.prototype,"balance",void 0);wui_account_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiAccountButton.prototype,"isUnsupportedChain",void 0);wui_account_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiAccountButton.prototype,"disabled",void 0);wui_account_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiAccountButton.prototype,"isProfileName",void 0);wui_account_button_decorate([(0,decorators.Cb)()],WuiAccountButton.prototype,"address",void 0);wui_account_button_decorate([(0,decorators.Cb)()],WuiAccountButton.prototype,"charsStart",void 0);wui_account_button_decorate([(0,decorators.Cb)()],WuiAccountButton.prototype,"charsEnd",void 0);WuiAccountButton=wui_account_button_decorate([customElement("wui-account-button")],WuiAccountButton);const wui_wallet_image_styles=lit.iv`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var wui_wallet_image_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiWalletImage=class WuiWalletImage extends lit.oi{constructor(){super(...arguments);this.size="md";this.name="";this.installed=false;this.badgeSize="xs"}render(){let borderRadius="xxs";if(this.size==="lg"){borderRadius="m"}else if(this.size==="md"){borderRadius="xs"}else{borderRadius="xxs"}this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${borderRadius});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `;if(this.walletIcon){this.dataset["walletIcon"]=this.walletIcon}return lit.dy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){if(this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`}else if(this.walletIcon){return lit.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`}return lit.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};WuiWalletImage.styles=[resetStyles,wui_wallet_image_styles];wui_wallet_image_decorate([(0,decorators.Cb)()],WuiWalletImage.prototype,"size",void 0);wui_wallet_image_decorate([(0,decorators.Cb)()],WuiWalletImage.prototype,"name",void 0);wui_wallet_image_decorate([(0,decorators.Cb)()],WuiWalletImage.prototype,"imageSrc",void 0);wui_wallet_image_decorate([(0,decorators.Cb)()],WuiWalletImage.prototype,"walletIcon",void 0);wui_wallet_image_decorate([(0,decorators.Cb)({type:Boolean})],WuiWalletImage.prototype,"installed",void 0);wui_wallet_image_decorate([(0,decorators.Cb)()],WuiWalletImage.prototype,"badgeSize",void 0);WuiWalletImage=wui_wallet_image_decorate([customElement("wui-wallet-image")],WuiWalletImage);const wui_all_wallets_image_styles=lit.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var wui_all_wallets_image_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const TOTAL_IMAGES=4;let WuiAllWalletsImage=class WuiAllWalletsImage extends lit.oi{constructor(){super(...arguments);this.walletImages=[]}render(){const isPlaceholders=this.walletImages.length<TOTAL_IMAGES;return lit.dy`${this.walletImages.slice(0,TOTAL_IMAGES).map((({src,walletName})=>lit.dy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${src}
              name=${(0,if_defined.o)(walletName)}
            ></wui-wallet-image>
          `))}
      ${isPlaceholders?[...Array(TOTAL_IMAGES-this.walletImages.length)].map((()=>lit.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};WuiAllWalletsImage.styles=[resetStyles,wui_all_wallets_image_styles];wui_all_wallets_image_decorate([(0,decorators.Cb)({type:Array})],WuiAllWalletsImage.prototype,"walletImages",void 0);WuiAllWalletsImage=wui_all_wallets_image_decorate([customElement("wui-all-wallets-image")],WuiAllWalletsImage);const wui_button_styles=lit.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var wui_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiButton=class WuiButton extends lit.oi{constructor(){super(...arguments);this.size="md";this.disabled=false;this.fullWidth=false;this.loading=false;this.variant="fill";this.hasIconLeft=false;this.hasIconRight=false}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const textVariant=this.size==="md"?"paragraph-600":"small-600";return lit.dy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${textVariant} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=true}handleSlotRightChange(){this.hasIconRight=true}loadingTemplate(){if(this.loading){return lit.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`}return lit.dy``}};WuiButton.styles=[resetStyles,elementStyles,wui_button_styles];wui_button_decorate([(0,decorators.Cb)()],WuiButton.prototype,"size",void 0);wui_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiButton.prototype,"disabled",void 0);wui_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiButton.prototype,"fullWidth",void 0);wui_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiButton.prototype,"loading",void 0);wui_button_decorate([(0,decorators.Cb)()],WuiButton.prototype,"variant",void 0);wui_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiButton.prototype,"hasIconLeft",void 0);wui_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiButton.prototype,"hasIconRight",void 0);WuiButton=wui_button_decorate([customElement("wui-button")],WuiButton);const networkSvgMd=lit.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;const wui_card_select_loader_styles=lit.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var wui_card_select_loader_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCardSelectLoader=class WuiCardSelectLoader extends lit.oi{constructor(){super(...arguments);this.type="wallet"}render(){return lit.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){if(this.type==="network"){return lit.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${networkSvgMd}`}return lit.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};WuiCardSelectLoader.styles=[resetStyles,elementStyles,wui_card_select_loader_styles];wui_card_select_loader_decorate([(0,decorators.Cb)()],WuiCardSelectLoader.prototype,"type",void 0);WuiCardSelectLoader=wui_card_select_loader_decorate([customElement("wui-card-select-loader")],WuiCardSelectLoader);const networkSvgSm=lit.YP`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;const networkSvgLg=lit.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;const wui_network_image_styles=lit.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var wui_network_image_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiNetworkImage=class WuiNetworkImage extends lit.oi{constructor(){super(...arguments);this.size="md";this.name="uknown";this.selected=false}render(){const networkImagesBySize={sm:networkSvgSm,md:networkSvgMd,lg:networkSvgLg};this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `;return lit.dy`${this.templateVisual()} ${networkImagesBySize[this.size]}`}templateVisual(){if(this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`}return lit.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};WuiNetworkImage.styles=[resetStyles,wui_network_image_styles];wui_network_image_decorate([(0,decorators.Cb)()],WuiNetworkImage.prototype,"size",void 0);wui_network_image_decorate([(0,decorators.Cb)()],WuiNetworkImage.prototype,"name",void 0);wui_network_image_decorate([(0,decorators.Cb)()],WuiNetworkImage.prototype,"imageSrc",void 0);wui_network_image_decorate([(0,decorators.Cb)({type:Boolean})],WuiNetworkImage.prototype,"selected",void 0);WuiNetworkImage=wui_network_image_decorate([customElement("wui-network-image")],WuiNetworkImage);const wui_card_select_styles=lit.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var wui_card_select_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCardSelect=class WuiCardSelect extends lit.oi{constructor(){super(...arguments);this.name="Unknown";this.type="wallet";this.imageSrc=undefined;this.disabled=false;this.selected=false;this.installed=false}render(){return lit.dy`
      <button data-selected=${(0,if_defined.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){if(this.type==="network"){return lit.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,if_defined.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `}return lit.dy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,if_defined.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};WuiCardSelect.styles=[resetStyles,elementStyles,wui_card_select_styles];wui_card_select_decorate([(0,decorators.Cb)()],WuiCardSelect.prototype,"name",void 0);wui_card_select_decorate([(0,decorators.Cb)()],WuiCardSelect.prototype,"type",void 0);wui_card_select_decorate([(0,decorators.Cb)()],WuiCardSelect.prototype,"imageSrc",void 0);wui_card_select_decorate([(0,decorators.Cb)({type:Boolean})],WuiCardSelect.prototype,"disabled",void 0);wui_card_select_decorate([(0,decorators.Cb)({type:Boolean})],WuiCardSelect.prototype,"selected",void 0);wui_card_select_decorate([(0,decorators.Cb)({type:Boolean})],WuiCardSelect.prototype,"installed",void 0);WuiCardSelect=wui_card_select_decorate([customElement("wui-card-select")],WuiCardSelect);const wui_chip_styles=lit.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var wui_chip_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiChip=class WuiChip extends lit.oi{constructor(){super(...arguments);this.variant="fill";this.imageSrc=undefined;this.disabled=false;this.icon="externalLink";this.href="";this.text=undefined}render(){const isSmall=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall";const textVariant=isSmall?"small-600":"paragraph-600";return lit.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${textVariant} color="inherit">
          ${this.title?this.title:UiHelperUtil.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){if(this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc}></wui-image>`}return null}};WuiChip.styles=[resetStyles,elementStyles,wui_chip_styles];wui_chip_decorate([(0,decorators.Cb)()],WuiChip.prototype,"variant",void 0);wui_chip_decorate([(0,decorators.Cb)()],WuiChip.prototype,"imageSrc",void 0);wui_chip_decorate([(0,decorators.Cb)({type:Boolean})],WuiChip.prototype,"disabled",void 0);wui_chip_decorate([(0,decorators.Cb)()],WuiChip.prototype,"icon",void 0);wui_chip_decorate([(0,decorators.Cb)()],WuiChip.prototype,"href",void 0);wui_chip_decorate([(0,decorators.Cb)()],WuiChip.prototype,"text",void 0);WuiChip=wui_chip_decorate([customElement("wui-chip")],WuiChip);const wui_connect_button_styles=lit.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var wui_connect_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiConnectButton=class WuiConnectButton extends lit.oi{constructor(){super(...arguments);this.size="md";this.loading=false}render(){const textVariant=this.size==="md"?"paragraph-600":"small-600";return lit.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${textVariant} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){if(!this.loading){return null}return lit.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`}};WuiConnectButton.styles=[resetStyles,elementStyles,wui_connect_button_styles];wui_connect_button_decorate([(0,decorators.Cb)()],WuiConnectButton.prototype,"size",void 0);wui_connect_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiConnectButton.prototype,"loading",void 0);WuiConnectButton=wui_connect_button_decorate([customElement("wui-connect-button")],WuiConnectButton);const wui_cta_button_styles=lit.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wui_cta_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiCtaButton=class WuiCtaButton extends lit.oi{constructor(){super(...arguments);this.disabled=false;this.label="";this.buttonLabel=""}render(){return lit.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};WuiCtaButton.styles=[resetStyles,elementStyles,wui_cta_button_styles];wui_cta_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiCtaButton.prototype,"disabled",void 0);wui_cta_button_decorate([(0,decorators.Cb)()],WuiCtaButton.prototype,"label",void 0);wui_cta_button_decorate([(0,decorators.Cb)()],WuiCtaButton.prototype,"buttonLabel",void 0);WuiCtaButton=wui_cta_button_decorate([customElement("wui-cta-button")],WuiCtaButton);var ref=__webpack_require__(5166);const wui_input_text_styles=lit.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var wui_input_text_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiInputText=class WuiInputText extends lit.oi{constructor(){super(...arguments);this.inputElementRef=(0,ref.V)();this.size="md";this.disabled=false;this.placeholder="";this.type="text"}render(){const sizeClass=`wui-size-${this.size}`;return lit.dy` ${this.templateIcon()}
      <input
        ${(0,ref.i)(this.inputElementRef)}
        class=${sizeClass}
        type=${this.type}
        enterkeyhint=${(0,if_defined.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${(0,if_defined.o)(this.value)}
      />
      <slot></slot>`}templateIcon(){if(this.icon){return lit.dy`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`}return null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:true,composed:true}))}};WuiInputText.styles=[resetStyles,elementStyles,wui_input_text_styles];wui_input_text_decorate([(0,decorators.Cb)()],WuiInputText.prototype,"size",void 0);wui_input_text_decorate([(0,decorators.Cb)()],WuiInputText.prototype,"icon",void 0);wui_input_text_decorate([(0,decorators.Cb)({type:Boolean})],WuiInputText.prototype,"disabled",void 0);wui_input_text_decorate([(0,decorators.Cb)()],WuiInputText.prototype,"placeholder",void 0);wui_input_text_decorate([(0,decorators.Cb)()],WuiInputText.prototype,"type",void 0);wui_input_text_decorate([(0,decorators.Cb)()],WuiInputText.prototype,"keyHint",void 0);wui_input_text_decorate([(0,decorators.Cb)()],WuiInputText.prototype,"value",void 0);WuiInputText=wui_input_text_decorate([customElement("wui-input-text")],WuiInputText);const wui_email_input_styles=lit.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var wui_email_input_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiEmailInput=class WuiEmailInput extends lit.oi{constructor(){super(...arguments);this.disabled=false}render(){return lit.dy`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){if(this.errorMessage){return lit.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`}return null}};WuiEmailInput.styles=[resetStyles,wui_email_input_styles];wui_email_input_decorate([(0,decorators.Cb)()],WuiEmailInput.prototype,"errorMessage",void 0);wui_email_input_decorate([(0,decorators.Cb)({type:Boolean})],WuiEmailInput.prototype,"disabled",void 0);wui_email_input_decorate([(0,decorators.Cb)()],WuiEmailInput.prototype,"value",void 0);WuiEmailInput=wui_email_input_decorate([customElement("wui-email-input")],WuiEmailInput);const wui_icon_link_styles=lit.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var wui_icon_link_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiIconLink=class WuiIconLink extends lit.oi{constructor(){super(...arguments);this.size="md";this.disabled=false;this.icon="copy";this.iconColor="inherit"}render(){return lit.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};WuiIconLink.styles=[resetStyles,elementStyles,colorStyles,wui_icon_link_styles];wui_icon_link_decorate([(0,decorators.Cb)()],WuiIconLink.prototype,"size",void 0);wui_icon_link_decorate([(0,decorators.Cb)({type:Boolean})],WuiIconLink.prototype,"disabled",void 0);wui_icon_link_decorate([(0,decorators.Cb)()],WuiIconLink.prototype,"icon",void 0);wui_icon_link_decorate([(0,decorators.Cb)()],WuiIconLink.prototype,"iconColor",void 0);WuiIconLink=wui_icon_link_decorate([customElement("wui-icon-link")],WuiIconLink);const wui_input_element_styles=lit.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var wui_input_element_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiInputElement=class WuiInputElement extends lit.oi{constructor(){super(...arguments);this.icon="copy"}render(){return lit.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};WuiInputElement.styles=[resetStyles,elementStyles,wui_input_element_styles];wui_input_element_decorate([(0,decorators.Cb)()],WuiInputElement.prototype,"icon",void 0);WuiInputElement=wui_input_element_decorate([customElement("wui-input-element")],WuiInputElement);const wui_input_numeric_styles=lit.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var wui_input_numeric_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiInputNumeric=class WuiInputNumeric extends lit.oi{constructor(){super(...arguments);this.disabled=false;this.value=""}render(){return lit.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};WuiInputNumeric.styles=[resetStyles,elementStyles,wui_input_numeric_styles];wui_input_numeric_decorate([(0,decorators.Cb)({type:Boolean})],WuiInputNumeric.prototype,"disabled",void 0);wui_input_numeric_decorate([(0,decorators.Cb)({type:String})],WuiInputNumeric.prototype,"value",void 0);WuiInputNumeric=wui_input_numeric_decorate([customElement("wui-input-numeric")],WuiInputNumeric);const wui_link_styles=lit.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var wui_link_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLink=class WuiLink extends lit.oi{constructor(){super(...arguments);this.disabled=false;this.color="inherit"}render(){return lit.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};WuiLink.styles=[resetStyles,elementStyles,wui_link_styles];wui_link_decorate([(0,decorators.Cb)({type:Boolean})],WuiLink.prototype,"disabled",void 0);wui_link_decorate([(0,decorators.Cb)()],WuiLink.prototype,"color",void 0);WuiLink=wui_link_decorate([customElement("wui-link")],WuiLink);const wui_list_item_styles=lit.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var wui_list_item_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListItem=class WuiListItem extends lit.oi{constructor(){super(...arguments);this.variant="icon";this.disabled=false;this.imageSrc=undefined;this.alt=undefined;this.chevron=false;this.loading=false}render(){return lit.dy`
      <button
        ?disabled=${this.loading?true:Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,if_defined.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`}else if(this.iconVariant==="square"&&this.icon&&this.variant==="icon"){return lit.dy`<wui-icon name=${this.icon}></wui-icon>`}else if(this.variant==="icon"&&this.icon&&this.iconVariant){const color=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200";const size=this.iconVariant==="square-blue"?"mdl":"md";const iconSize=this.iconSize?this.iconSize:size;return lit.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${iconSize}
          background="transparent"
          iconColor=${color}
          backgroundColor=${color}
          size=${size}
        ></wui-icon-box>
      `}return null}loadingTemplate(){if(this.loading){return lit.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`}return lit.dy``}chevronTemplate(){if(this.chevron){return lit.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`}return null}};WuiListItem.styles=[resetStyles,elementStyles,wui_list_item_styles];wui_list_item_decorate([(0,decorators.Cb)()],WuiListItem.prototype,"icon",void 0);wui_list_item_decorate([(0,decorators.Cb)()],WuiListItem.prototype,"iconSize",void 0);wui_list_item_decorate([(0,decorators.Cb)()],WuiListItem.prototype,"variant",void 0);wui_list_item_decorate([(0,decorators.Cb)()],WuiListItem.prototype,"iconVariant",void 0);wui_list_item_decorate([(0,decorators.Cb)({type:Boolean})],WuiListItem.prototype,"disabled",void 0);wui_list_item_decorate([(0,decorators.Cb)()],WuiListItem.prototype,"imageSrc",void 0);wui_list_item_decorate([(0,decorators.Cb)()],WuiListItem.prototype,"alt",void 0);wui_list_item_decorate([(0,decorators.Cb)({type:Boolean})],WuiListItem.prototype,"chevron",void 0);wui_list_item_decorate([(0,decorators.Cb)({type:Boolean})],WuiListItem.prototype,"loading",void 0);WuiListItem=wui_list_item_decorate([customElement("wui-list-item")],WuiListItem);var TransactionTypePastTense;(function(TransactionTypePastTense){TransactionTypePastTense["approve"]="approved";TransactionTypePastTense["bought"]="bought";TransactionTypePastTense["borrow"]="borrowed";TransactionTypePastTense["burn"]="burnt";TransactionTypePastTense["cancel"]="canceled";TransactionTypePastTense["claim"]="claimed";TransactionTypePastTense["deploy"]="deployed";TransactionTypePastTense["deposit"]="deposited";TransactionTypePastTense["execute"]="executed";TransactionTypePastTense["mint"]="minted";TransactionTypePastTense["receive"]="received";TransactionTypePastTense["repay"]="repaid";TransactionTypePastTense["send"]="sent";TransactionTypePastTense["sell"]="sold";TransactionTypePastTense["stake"]="staked";TransactionTypePastTense["trade"]="swapped";TransactionTypePastTense["unstake"]="unstaked";TransactionTypePastTense["withdraw"]="withdrawn"})(TransactionTypePastTense||(TransactionTypePastTense={}));const wui_transaction_visual_styles=lit.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var wui_transaction_visual_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTransactionVisual=class WuiTransactionVisual extends lit.oi{constructor(){super(...arguments);this.images=[];this.secondImage={type:undefined,url:""}}render(){const[firstImage,secondImage]=this.images;const isLeftNFT=firstImage?.type==="NFT";const isRightNFT=secondImage?.url?secondImage.type==="NFT":isLeftNFT;const leftRadius=isLeftNFT?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";const rightRadius=isRightNFT?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";this.style.cssText=`\n    --local-left-border-radius: ${leftRadius};\n    --local-right-border-radius: ${rightRadius};\n    `;return lit.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[firstImage,secondImage]=this.images;const firstImageType=firstImage?.type;const haveTwoImages=this.images.length===2;if(haveTwoImages&&(firstImage?.url||secondImage?.url)){return lit.dy`<div class="swap-images-container">
        ${firstImage?.url?lit.dy`<wui-image src=${firstImage.url} alt="Transaction image"></wui-image>`:null}
        ${secondImage?.url?lit.dy`<wui-image src=${secondImage.url} alt="Transaction image"></wui-image>`:null}
      </div>`}else if(firstImage?.url){return lit.dy`<wui-image src=${firstImage.url} alt="Transaction image"></wui-image>`}else if(firstImageType==="NFT"){return lit.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`}return lit.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let color="accent-100";let icon=undefined;icon=this.getIcon();if(this.status){color=this.getStatusColor()}if(!icon){return null}return lit.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${color}
        backgroundColor=${color}
        background="opaque"
        icon=${icon}
        ?border=${true}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return undefined}}getIcon(){if(this.onlyDirectionIcon){return this.getDirectionIcon()}if(this.type==="trade"){return"swapHorizontalBold"}else if(this.type==="approve"){return"checkmark"}else if(this.type==="cancel"){return"close"}return this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};WuiTransactionVisual.styles=[wui_transaction_visual_styles];wui_transaction_visual_decorate([(0,decorators.Cb)()],WuiTransactionVisual.prototype,"type",void 0);wui_transaction_visual_decorate([(0,decorators.Cb)()],WuiTransactionVisual.prototype,"status",void 0);wui_transaction_visual_decorate([(0,decorators.Cb)()],WuiTransactionVisual.prototype,"direction",void 0);wui_transaction_visual_decorate([(0,decorators.Cb)({type:Boolean})],WuiTransactionVisual.prototype,"onlyDirectionIcon",void 0);wui_transaction_visual_decorate([(0,decorators.Cb)({type:Array})],WuiTransactionVisual.prototype,"images",void 0);wui_transaction_visual_decorate([(0,decorators.Cb)({type:Object})],WuiTransactionVisual.prototype,"secondImage",void 0);WuiTransactionVisual=wui_transaction_visual_decorate([customElement("wui-transaction-visual")],WuiTransactionVisual);const wui_transaction_list_item_styles=lit.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var wui_transaction_list_item_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTransactionListItem=class WuiTransactionListItem extends lit.oi{constructor(){super(...arguments);this.type="approve";this.onlyDirectionIcon=false;this.images=[]}render(){return lit.dy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,if_defined.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,if_defined.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${TransactionTypePastTense[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const description=this.descriptions?.[0];return description?lit.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${description}</span>
          </wui-text>
        `:null}templateSecondDescription(){const description=this.descriptions?.[1];return description?lit.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${description}</span>
          </wui-text>
        `:null}};WuiTransactionListItem.styles=[resetStyles,wui_transaction_list_item_styles];wui_transaction_list_item_decorate([(0,decorators.Cb)()],WuiTransactionListItem.prototype,"type",void 0);wui_transaction_list_item_decorate([(0,decorators.Cb)({type:Array})],WuiTransactionListItem.prototype,"descriptions",void 0);wui_transaction_list_item_decorate([(0,decorators.Cb)()],WuiTransactionListItem.prototype,"date",void 0);wui_transaction_list_item_decorate([(0,decorators.Cb)({type:Boolean})],WuiTransactionListItem.prototype,"onlyDirectionIcon",void 0);wui_transaction_list_item_decorate([(0,decorators.Cb)()],WuiTransactionListItem.prototype,"status",void 0);wui_transaction_list_item_decorate([(0,decorators.Cb)()],WuiTransactionListItem.prototype,"direction",void 0);wui_transaction_list_item_decorate([(0,decorators.Cb)({type:Array})],WuiTransactionListItem.prototype,"images",void 0);WuiTransactionListItem=wui_transaction_list_item_decorate([customElement("wui-transaction-list-item")],WuiTransactionListItem);const wui_transaction_list_item_loader_styles=lit.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var wui_transaction_list_item_loader_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTransactionListItemLoader=class WuiTransactionListItemLoader extends lit.oi{render(){return lit.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};WuiTransactionListItemLoader.styles=[resetStyles,wui_transaction_list_item_loader_styles];WuiTransactionListItemLoader=wui_transaction_list_item_loader_decorate([customElement("wui-transaction-list-item-loader")],WuiTransactionListItemLoader);const wui_tag_styles=lit.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var wui_tag_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTag=class WuiTag extends lit.oi{constructor(){super(...arguments);this.variant="main"}render(){this.dataset["variant"]=this.variant;return lit.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};WuiTag.styles=[resetStyles,wui_tag_styles];wui_tag_decorate([(0,decorators.Cb)()],WuiTag.prototype,"variant",void 0);WuiTag=wui_tag_decorate([customElement("wui-tag")],WuiTag);const wui_list_wallet_styles=lit.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var wui_list_wallet_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListWallet=class WuiListWallet extends lit.oi{constructor(){super(...arguments);this.walletImages=[];this.imageSrc="";this.name="";this.installed=false;this.disabled=false;this.showAllWallets=false}render(){return lit.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){if(this.showAllWallets&&this.imageSrc){return lit.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `}else if(this.showAllWallets&&this.walletIcon){return lit.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `}return null}templateWalletImage(){if(!this.showAllWallets&&this.imageSrc){return lit.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`}else if(!this.showAllWallets&&!this.imageSrc){return lit.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}return null}templateStatus(){if(this.tagLabel&&this.tagVariant){return lit.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`}else if(this.icon){return lit.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`}return null}};WuiListWallet.styles=[resetStyles,elementStyles,wui_list_wallet_styles];wui_list_wallet_decorate([(0,decorators.Cb)({type:Array})],WuiListWallet.prototype,"walletImages",void 0);wui_list_wallet_decorate([(0,decorators.Cb)()],WuiListWallet.prototype,"imageSrc",void 0);wui_list_wallet_decorate([(0,decorators.Cb)()],WuiListWallet.prototype,"name",void 0);wui_list_wallet_decorate([(0,decorators.Cb)()],WuiListWallet.prototype,"tagLabel",void 0);wui_list_wallet_decorate([(0,decorators.Cb)()],WuiListWallet.prototype,"tagVariant",void 0);wui_list_wallet_decorate([(0,decorators.Cb)()],WuiListWallet.prototype,"icon",void 0);wui_list_wallet_decorate([(0,decorators.Cb)()],WuiListWallet.prototype,"walletIcon",void 0);wui_list_wallet_decorate([(0,decorators.Cb)({type:Boolean})],WuiListWallet.prototype,"installed",void 0);wui_list_wallet_decorate([(0,decorators.Cb)({type:Boolean})],WuiListWallet.prototype,"disabled",void 0);wui_list_wallet_decorate([(0,decorators.Cb)({type:Boolean})],WuiListWallet.prototype,"showAllWallets",void 0);WuiListWallet=wui_list_wallet_decorate([customElement("wui-list-wallet")],WuiListWallet);const wui_logo_styles=lit.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var wui_logo_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLogo=class WuiLogo extends lit.oi{constructor(){super(...arguments);this.logo="google"}render(){return lit.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};WuiLogo.styles=[resetStyles,wui_logo_styles];wui_logo_decorate([(0,decorators.Cb)()],WuiLogo.prototype,"logo",void 0);WuiLogo=wui_logo_decorate([customElement("wui-logo")],WuiLogo);const wui_logo_select_styles=lit.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wui_logo_select_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiLogoSelect=class WuiLogoSelect extends lit.oi{constructor(){super(...arguments);this.logo="google";this.disabled=false}render(){return lit.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};WuiLogoSelect.styles=[resetStyles,elementStyles,wui_logo_select_styles];wui_logo_select_decorate([(0,decorators.Cb)()],WuiLogoSelect.prototype,"logo",void 0);wui_logo_select_decorate([(0,decorators.Cb)({type:Boolean})],WuiLogoSelect.prototype,"disabled",void 0);WuiLogoSelect=wui_logo_select_decorate([customElement("wui-logo-select")],WuiLogoSelect);const wui_network_button_styles=lit.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var wui_network_button_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiNetworkButton=class WuiNetworkButton extends lit.oi{constructor(){super(...arguments);this.imageSrc=undefined;this.isUnsupportedChain=undefined;this.disabled=false}render(){return lit.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){if(this.isUnsupportedChain){return lit.dy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `}if(this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc}></wui-image>`}return lit.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};WuiNetworkButton.styles=[resetStyles,elementStyles,wui_network_button_styles];wui_network_button_decorate([(0,decorators.Cb)()],WuiNetworkButton.prototype,"imageSrc",void 0);wui_network_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiNetworkButton.prototype,"isUnsupportedChain",void 0);wui_network_button_decorate([(0,decorators.Cb)({type:Boolean})],WuiNetworkButton.prototype,"disabled",void 0);WuiNetworkButton=wui_network_button_decorate([customElement("wui-network-button")],WuiNetworkButton);const wui_otp_styles=lit.iv`
  :host {
    position: relative;
    display: block;
  }
`;var wui_otp_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiOtp=class WuiOtp extends lit.oi{constructor(){super(...arguments);this.length=6;this.otp="";this.values=Array.from({length:this.length}).map((()=>""));this.numerics=[];this.shouldInputBeEnabled=index=>{const previousInputs=this.values.slice(0,index);return previousInputs.every((input=>input!==""))};this.handleKeyDown=(e,index)=>{const inputElement=e.target;const input=this.getInputElement(inputElement);const keyArr=["ArrowLeft","ArrowRight","Shift","Delete"];if(!input){return}if(keyArr.includes(e.key)){e.preventDefault()}const currentCaretPos=input.selectionStart;switch(e.key){case"ArrowLeft":if(currentCaretPos){input.setSelectionRange(currentCaretPos+1,currentCaretPos+1)}this.focusInputField("prev",index);break;case"ArrowRight":this.focusInputField("next",index);break;case"Shift":this.focusInputField("next",index);break;case"Delete":if(input.value===""){this.focusInputField("prev",index)}else{this.updateInput(input,index,"")}break;case"Backspace":if(input.value===""){this.focusInputField("prev",index)}else{this.updateInput(input,index,"")}break;default:}};this.focusInputField=(dir,index)=>{if(dir==="next"){const nextIndex=index+1;if(!this.shouldInputBeEnabled(nextIndex)){return}const numeric=this.numerics[nextIndex<this.length?nextIndex:index];const input=numeric?this.getInputElement(numeric):undefined;if(input){input.disabled=false;input.focus()}}if(dir==="prev"){const nextIndex=index-1;const numeric=this.numerics[nextIndex>-1?nextIndex:index];const input=numeric?this.getInputElement(numeric):undefined;if(input){input.focus()}}}}firstUpdated(){if(this.otp){this.values=this.otp.split("")}const numericElements=this.shadowRoot?.querySelectorAll("wui-input-numeric");if(numericElements){this.numerics=Array.from(numericElements)}this.numerics[0]?.focus()}render(){return lit.dy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((_,index)=>lit.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,index)}
              @keydown=${e=>this.handleKeyDown(e,index)}
              .disabled=${!this.shouldInputBeEnabled(index)}
              .value=${this.values[index]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(element,index,value){const numeric=this.numerics[index];const input=element||(numeric?this.getInputElement(numeric):undefined);if(input){input.value=value;this.values=this.values.map(((val,i)=>i===index?value:val))}}handleInput(e,index){const inputElement=e.target;const input=this.getInputElement(inputElement);if(input){const inputValue=input.value;if(e.inputType==="insertFromPaste"){this.handlePaste(input,inputValue,index)}else{const isValid=UiHelperUtil.isNumber(inputValue);if(isValid&&e.data){this.updateInput(input,index,e.data);this.focusInputField("next",index)}else{this.updateInput(input,index,"")}}}this.dispatchInputChangeEvent()}handlePaste(input,inputValue,index){const value=inputValue[0];const isValid=value&&UiHelperUtil.isNumber(value);if(isValid){this.updateInput(input,index,value);const inputString=inputValue.substring(1);if(index+1<this.length&&inputString.length){const nextNumeric=this.numerics[index+1];const nextInput=nextNumeric?this.getInputElement(nextNumeric):undefined;if(nextInput){this.handlePaste(nextInput,inputString,index+1)}}else{this.focusInputField("next",index)}}else{this.updateInput(input,index,"")}}getInputElement(el){if(el.shadowRoot?.querySelector("input")){return el.shadowRoot.querySelector("input")}return null}dispatchInputChangeEvent(){const value=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:value,bubbles:true,composed:true}))}};WuiOtp.styles=[resetStyles,wui_otp_styles];wui_otp_decorate([(0,decorators.Cb)({type:Number})],WuiOtp.prototype,"length",void 0);wui_otp_decorate([(0,decorators.Cb)({type:String})],WuiOtp.prototype,"otp",void 0);wui_otp_decorate([(0,decorators.SB)()],WuiOtp.prototype,"values",void 0);WuiOtp=wui_otp_decorate([customElement("wui-otp")],WuiOtp);var browser=__webpack_require__(30232);const CONNECTING_ERROR_MARGIN=.1;const CIRCLE_SIZE_MODIFIER=2.5;const QRCODE_MATRIX_MARGIN=7;function isAdjecentDots(cy,otherCy,cellSize){if(cy===otherCy){return false}const diff=cy-otherCy<0?otherCy-cy:cy-otherCy;return diff<=cellSize+CONNECTING_ERROR_MARGIN}function getMatrix(value,errorCorrectionLevel){const arr=Array.prototype.slice.call(browser.create(value,{errorCorrectionLevel}).modules.data,0);const sqrt=Math.sqrt(arr.length);return arr.reduce(((rows,key,index)=>(index%sqrt===0?rows.push([key]):rows[rows.length-1].push(key))&&rows),[])}const QrCodeUtil={generate(uri,size,logoSize){const dotColor="#141414";const edgeColor="transparent";const strokeWidth=5;const dots=[];const matrix=getMatrix(uri,"Q");const cellSize=size/matrix.length;const qrList=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];qrList.forEach((({x,y})=>{const x1=(matrix.length-QRCODE_MATRIX_MARGIN)*cellSize*x;const y1=(matrix.length-QRCODE_MATRIX_MARGIN)*cellSize*y;const borderRadius=.45;for(let i=0;i<qrList.length;i+=1){const dotSize=cellSize*(QRCODE_MATRIX_MARGIN-i*2);dots.push(lit.YP`
            <rect
              fill=${i===2?dotColor:edgeColor}
              width=${i===0?dotSize-strokeWidth:dotSize}
              rx= ${i===0?(dotSize-strokeWidth)*borderRadius:dotSize*borderRadius}
              ry= ${i===0?(dotSize-strokeWidth)*borderRadius:dotSize*borderRadius}
              stroke=${dotColor}
              stroke-width=${i===0?strokeWidth:0}
              height=${i===0?dotSize-strokeWidth:dotSize}
              x= ${i===0?y1+cellSize*i+strokeWidth/2:y1+cellSize*i}
              y= ${i===0?x1+cellSize*i+strokeWidth/2:x1+cellSize*i}
            />
          `)}}));const clearArenaSize=Math.floor((logoSize+25)/cellSize);const matrixMiddleStart=matrix.length/2-clearArenaSize/2;const matrixMiddleEnd=matrix.length/2+clearArenaSize/2-1;const circles=[];matrix.forEach(((row,i)=>{row.forEach(((_,j)=>{if(matrix[i][j]){if(!(i<QRCODE_MATRIX_MARGIN&&j<QRCODE_MATRIX_MARGIN||i>matrix.length-(QRCODE_MATRIX_MARGIN+1)&&j<QRCODE_MATRIX_MARGIN||i<QRCODE_MATRIX_MARGIN&&j>matrix.length-(QRCODE_MATRIX_MARGIN+1))){if(!(i>matrixMiddleStart&&i<matrixMiddleEnd&&j>matrixMiddleStart&&j<matrixMiddleEnd)){const cx=i*cellSize+cellSize/2;const cy=j*cellSize+cellSize/2;circles.push([cx,cy])}}}}))}));const circlesToConnect={};circles.forEach((([cx,cy])=>{if(circlesToConnect[cx]){circlesToConnect[cx]?.push(cy)}else{circlesToConnect[cx]=[cy]}}));Object.entries(circlesToConnect).map((([cx,cys])=>{const newCys=cys.filter((cy=>cys.every((otherCy=>!isAdjecentDots(cy,otherCy,cellSize)))));return[Number(cx),newCys]})).forEach((([cx,cys])=>{cys.forEach((cy=>{dots.push(lit.YP`<circle cx=${cx} cy=${cy} fill=${dotColor} r=${cellSize/CIRCLE_SIZE_MODIFIER} />`)}))}));Object.entries(circlesToConnect).filter((([_,cys])=>cys.length>1)).map((([cx,cys])=>{const newCys=cys.filter((cy=>cys.some((otherCy=>isAdjecentDots(cy,otherCy,cellSize)))));return[Number(cx),newCys]})).map((([cx,cys])=>{cys.sort(((a,b)=>a<b?-1:1));const groups=[];for(const cy of cys){const group=groups.find((item=>item.some((otherCy=>isAdjecentDots(cy,otherCy,cellSize)))));if(group){group.push(cy)}else{groups.push([cy])}}return[cx,groups.map((item=>[item[0],item[item.length-1]]))]})).forEach((([cx,groups])=>{groups.forEach((([y1,y2])=>{dots.push(lit.YP`
              <line
                x1=${cx}
                x2=${cx}
                y1=${y1}
                y2=${y2}
                stroke=${dotColor}
                stroke-width=${cellSize/(CIRCLE_SIZE_MODIFIER/2)}
                stroke-linecap="round"
              />
            `)}))}));return dots}};const wui_qr_code_styles=lit.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var wui_qr_code_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiQrCode=class WuiQrCode extends lit.oi{constructor(){super(...arguments);this.uri="";this.size=0;this.theme="dark";this.imageSrc=undefined;this.alt=undefined}render(){this.dataset["theme"]=this.theme;this.style.cssText=`--local-size: ${this.size}px`;return lit.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const size=this.theme==="light"?this.size:this.size-16*2;return lit.YP`
      <svg height=${size} width=${size}>
        ${QrCodeUtil.generate(this.uri,size,size/4)}
      </svg>
    `}templateVisual(){if(this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`}return lit.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};WuiQrCode.styles=[resetStyles,wui_qr_code_styles];wui_qr_code_decorate([(0,decorators.Cb)()],WuiQrCode.prototype,"uri",void 0);wui_qr_code_decorate([(0,decorators.Cb)({type:Number})],WuiQrCode.prototype,"size",void 0);wui_qr_code_decorate([(0,decorators.Cb)()],WuiQrCode.prototype,"theme",void 0);wui_qr_code_decorate([(0,decorators.Cb)()],WuiQrCode.prototype,"imageSrc",void 0);wui_qr_code_decorate([(0,decorators.Cb)()],WuiQrCode.prototype,"alt",void 0);WuiQrCode=wui_qr_code_decorate([customElement("wui-qr-code")],WuiQrCode);const wui_search_bar_styles=lit.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var wui_search_bar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiSearchBar=class WuiSearchBar extends lit.oi{constructor(){super(...arguments);this.inputComponentRef=(0,ref.V)()}render(){return lit.dy`
      <wui-input-text
        ${(0,ref.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const inputComponent=this.inputComponentRef.value;const inputElement=inputComponent?.inputElementRef.value;if(inputElement){inputElement.value="";inputElement.focus();inputElement.dispatchEvent(new Event("input"))}}};WuiSearchBar.styles=[resetStyles,wui_search_bar_styles];WuiSearchBar=wui_search_bar_decorate([customElement("wui-search-bar")],WuiSearchBar);const wui_snackbar_styles=lit.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var wui_snackbar_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiSnackbar=class WuiSnackbar extends lit.oi{constructor(){super(...arguments);this.backgroundColor="accent-100";this.iconColor="accent-100";this.icon="checkmark";this.message=""}render(){return lit.dy`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};WuiSnackbar.styles=[resetStyles,wui_snackbar_styles];wui_snackbar_decorate([(0,decorators.Cb)()],WuiSnackbar.prototype,"backgroundColor",void 0);wui_snackbar_decorate([(0,decorators.Cb)()],WuiSnackbar.prototype,"iconColor",void 0);wui_snackbar_decorate([(0,decorators.Cb)()],WuiSnackbar.prototype,"icon",void 0);wui_snackbar_decorate([(0,decorators.Cb)()],WuiSnackbar.prototype,"message",void 0);WuiSnackbar=wui_snackbar_decorate([customElement("wui-snackbar")],WuiSnackbar);const wui_tabs_styles=lit.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var wui_tabs_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTabs=class WuiTabs extends lit.oi{constructor(){super(...arguments);this.tabs=[];this.onTabChange=()=>null;this.buttons=[];this.disabled=false;this.activeTab=0;this.localTabWidth="100px";this.isDense=false}render(){this.isDense=this.tabs.length>3;this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `;this.dataset["type"]=this.isDense?"flex":"block";return this.tabs.map(((tab,index)=>{const isActive=index===this.activeTab;return lit.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(index)}
          data-active=${isActive}
        >
          <wui-icon size="xs" color="inherit" name=${tab.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${tab.label} </wui-text>
        </button>
      `}))}firstUpdated(){if(this.shadowRoot&&this.isDense){this.buttons=[...this.shadowRoot.querySelectorAll("button")];setTimeout((()=>{this.animateTabs(0,true)}),0)}}onTabClick(index){if(this.buttons){this.animateTabs(index,false)}this.activeTab=index;this.onTabChange(index)}animateTabs(index,initialAnimation){const passiveBtn=this.buttons[this.activeTab];const activeBtn=this.buttons[index];const passiveBtnText=passiveBtn?.querySelector("wui-text");const activeBtnText=activeBtn?.querySelector("wui-text");const activeBtnBounds=activeBtn?.getBoundingClientRect();const activeBtnTextBounds=activeBtnText?.getBoundingClientRect();if(passiveBtn&&passiveBtnText&&!initialAnimation&&index!==this.activeTab){passiveBtnText.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"});passiveBtn.animate([{width:`34px`}],{duration:500,easing:"ease",fill:"forwards"})}if(activeBtn&&activeBtnBounds&&activeBtnTextBounds&&activeBtnText){if(index!==this.activeTab||initialAnimation){this.localTabWidth=`${Math.round(activeBtnBounds.width+activeBtnTextBounds.width)+6}px`;activeBtn.animate([{width:`${activeBtnBounds.width+activeBtnTextBounds.width}px`}],{duration:initialAnimation?0:500,fill:"forwards",easing:"ease"});activeBtnText.animate([{opacity:1}],{duration:initialAnimation?0:125,delay:initialAnimation?0:200,fill:"forwards",easing:"ease"})}}}};WuiTabs.styles=[resetStyles,elementStyles,wui_tabs_styles];wui_tabs_decorate([(0,decorators.Cb)({type:Array})],WuiTabs.prototype,"tabs",void 0);wui_tabs_decorate([(0,decorators.Cb)()],WuiTabs.prototype,"onTabChange",void 0);wui_tabs_decorate([(0,decorators.Cb)({type:Array})],WuiTabs.prototype,"buttons",void 0);wui_tabs_decorate([(0,decorators.Cb)({type:Boolean})],WuiTabs.prototype,"disabled",void 0);wui_tabs_decorate([(0,decorators.SB)()],WuiTabs.prototype,"activeTab",void 0);wui_tabs_decorate([(0,decorators.SB)()],WuiTabs.prototype,"localTabWidth",void 0);wui_tabs_decorate([(0,decorators.SB)()],WuiTabs.prototype,"isDense",void 0);WuiTabs=wui_tabs_decorate([customElement("wui-tabs")],WuiTabs);const wui_tooltip_styles=lit.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var wui_tooltip_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiTooltip=class WuiTooltip extends lit.oi{constructor(){super(...arguments);this.placement="top";this.message=""}render(){return lit.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};WuiTooltip.styles=[resetStyles,elementStyles,wui_tooltip_styles];wui_tooltip_decorate([(0,decorators.Cb)()],WuiTooltip.prototype,"placement",void 0);wui_tooltip_decorate([(0,decorators.Cb)()],WuiTooltip.prototype,"message",void 0);WuiTooltip=wui_tooltip_decorate([customElement("wui-tooltip")],WuiTooltip);const wui_visual_thumbnail_styles=lit.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var wui_visual_thumbnail_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiVisualThumbnail=class WuiVisualThumbnail extends lit.oi{render(){this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`;return lit.dy`${this.templateVisual()}`}templateVisual(){if(this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`}return lit.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};WuiVisualThumbnail.styles=[resetStyles,wui_visual_thumbnail_styles];wui_visual_thumbnail_decorate([(0,decorators.Cb)()],WuiVisualThumbnail.prototype,"imageSrc",void 0);wui_visual_thumbnail_decorate([(0,decorators.Cb)()],WuiVisualThumbnail.prototype,"alt",void 0);wui_visual_thumbnail_decorate([(0,decorators.Cb)({type:Boolean})],WuiVisualThumbnail.prototype,"borderRadiusFull",void 0);WuiVisualThumbnail=wui_visual_thumbnail_decorate([customElement("wui-visual-thumbnail")],WuiVisualThumbnail);const wui_notice_card_styles=lit.iv`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var wui_notice_card_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiNoticeCard=class WuiNoticeCard extends lit.oi{constructor(){super(...arguments);this.label="";this.description="";this.icon="wallet"}render(){return lit.dy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};WuiNoticeCard.styles=[resetStyles,elementStyles,wui_notice_card_styles];wui_notice_card_decorate([(0,decorators.Cb)()],WuiNoticeCard.prototype,"label",void 0);wui_notice_card_decorate([(0,decorators.Cb)()],WuiNoticeCard.prototype,"description",void 0);wui_notice_card_decorate([(0,decorators.Cb)()],WuiNoticeCard.prototype,"icon",void 0);WuiNoticeCard=wui_notice_card_decorate([customElement("wui-notice-card")],WuiNoticeCard);const wui_list_accordion_styles=lit.iv`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var wui_list_accordion_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};const MAX_HEIGHT=100;let WuiListAccordion=class WuiListAccordion extends lit.oi{constructor(){super(...arguments);this.textTitle="";this.overflowedContent="";this.toggled=false;this.enableAccordion=false;this.scrollElement=undefined;this.scrollHeightElement=0}firstUpdated(){setTimeout((()=>{const heightElement=this.shadowRoot?.querySelector(".heightContent");if(heightElement){this.scrollElement=heightElement;const scrollHeight=heightElement?.scrollHeight;if(scrollHeight&&scrollHeight>MAX_HEIGHT){this.enableAccordion=true;this.scrollHeightElement=scrollHeight;this.requestUpdate()}}}),0)}render(){return lit.dy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?Boolean(this.toggled):true}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const icon=this.shadowRoot?.querySelector("wui-icon");if(this.enableAccordion){this.toggled=!this.toggled;this.requestUpdate();if(this.scrollElement){this.scrollElement.animate([{maxHeight:this.toggled?`${MAX_HEIGHT}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${MAX_HEIGHT}px`}],{duration:300,fill:"forwards",easing:"ease"})}if(icon){icon.animate([{transform:this.toggled?`rotate(0deg)`:`rotate(180deg)`},{transform:this.toggled?`rotate(180deg)`:`rotate(0deg)`}],{duration:300,fill:"forwards",easing:"ease"})}}}chevronTemplate(){if(this.enableAccordion){return lit.dy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`}return null}};WuiListAccordion.styles=[resetStyles,elementStyles,wui_list_accordion_styles];wui_list_accordion_decorate([(0,decorators.Cb)()],WuiListAccordion.prototype,"textTitle",void 0);wui_list_accordion_decorate([(0,decorators.Cb)()],WuiListAccordion.prototype,"overflowedContent",void 0);WuiListAccordion=wui_list_accordion_decorate([customElement("wui-list-accordion")],WuiListAccordion);const wui_list_content_styles=lit.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var wui_list_content_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListContent=class WuiListContent extends lit.oi{constructor(){super(...arguments);this.imageSrc=undefined;this.textTitle="";this.textValue=undefined}render(){return lit.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){if(this.imageSrc){return lit.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`}else if(this.textValue){return lit.dy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`}return lit.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};WuiListContent.styles=[resetStyles,elementStyles,wui_list_content_styles];wui_list_content_decorate([(0,decorators.Cb)()],WuiListContent.prototype,"imageSrc",void 0);wui_list_content_decorate([(0,decorators.Cb)()],WuiListContent.prototype,"textTitle",void 0);wui_list_content_decorate([(0,decorators.Cb)()],WuiListContent.prototype,"textValue",void 0);WuiListContent=wui_list_content_decorate([customElement("wui-list-content")],WuiListContent);const wui_list_wallet_transaction_styles=lit.iv`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var wui_list_wallet_transaction_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListWalletTransaction=class WuiListWalletTransaction extends lit.oi{constructor(){super(...arguments);this.amount="";this.networkCurreny="";this.networkImageUrl="";this.receiverAddress="";this.addressExplorerUrl=""}render(){return lit.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){if(this.networkImageUrl){return lit.dy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`}return lit.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};WuiListWalletTransaction.styles=[resetStyles,elementStyles,wui_list_wallet_transaction_styles];wui_list_wallet_transaction_decorate([(0,decorators.Cb)()],WuiListWalletTransaction.prototype,"amount",void 0);wui_list_wallet_transaction_decorate([(0,decorators.Cb)()],WuiListWalletTransaction.prototype,"networkCurreny",void 0);wui_list_wallet_transaction_decorate([(0,decorators.Cb)()],WuiListWalletTransaction.prototype,"networkImageUrl",void 0);wui_list_wallet_transaction_decorate([(0,decorators.Cb)()],WuiListWalletTransaction.prototype,"receiverAddress",void 0);wui_list_wallet_transaction_decorate([(0,decorators.Cb)()],WuiListWalletTransaction.prototype,"addressExplorerUrl",void 0);WuiListWalletTransaction=wui_list_wallet_transaction_decorate([customElement("wui-list-wallet-transaction")],WuiListWalletTransaction);const wui_list_network_styles=lit.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var wui_list_network_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiListNetwork=class WuiListNetwork extends lit.oi{constructor(){super(...arguments);this.imageSrc="";this.name="";this.disabled=false}render(){return lit.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){if(this.imageSrc){return lit.dy`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`}if(!this.imageSrc){return lit.dy`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}return null}};WuiListNetwork.styles=[resetStyles,elementStyles,wui_list_network_styles];wui_list_network_decorate([(0,decorators.Cb)()],WuiListNetwork.prototype,"imageSrc",void 0);wui_list_network_decorate([(0,decorators.Cb)()],WuiListNetwork.prototype,"name",void 0);wui_list_network_decorate([(0,decorators.Cb)({type:Boolean})],WuiListNetwork.prototype,"disabled",void 0);WuiListNetwork=wui_list_network_decorate([customElement("wui-list-network")],WuiListNetwork);const wui_grid_styles=lit.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var wui_grid_decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};let WuiGrid=class WuiGrid extends lit.oi{render(){this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&UiHelperUtil.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&UiHelperUtil.getSpacingStyles(this.margin,3)};\n    `;return lit.dy`<slot></slot>`}};WuiGrid.styles=[resetStyles,wui_grid_styles];wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"gridTemplateRows",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"gridTemplateColumns",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"justifyItems",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"alignItems",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"justifyContent",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"alignContent",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"columnGap",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"rowGap",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"gap",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"padding",void 0);wui_grid_decorate([(0,decorators.Cb)()],WuiGrid.prototype,"margin",void 0);WuiGrid=wui_grid_decorate([customElement("wui-grid")],WuiGrid);const wui_separator_styles=lit.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }