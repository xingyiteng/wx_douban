// pages/demo/demo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
	
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const _this = this;
		wx.request({
			url: "https://douban.uieee.com/v2/movie/in_theaters",
			data: {},
			header: {
				'content-type': 'json'
			},
			success: function (res) {
				console.log(res.data)
				_this.setData({
					subjects: res.data.subjects
				})
			}
		}),
		
			wx.request({
				url: "https://douban.uieee.com/v2/movie/top250",
				data: {},
				header: {
					'content-type': 'json'
				},
				success: function (res) {
					console.log(res.data)
					_this.setData({
						subjects_top250: res.data.subjects
					})
				}
			}),
			wx.request({
				url: "https://douban.uieee.com/v2/movie/coming_soon",
				data: {},
				header: {
					'content-type': 'json'
				},
				success: function (res) {
					console.log(res.data)
					_this.setData({
						coming_soon: res.data.subjects
					})
				}
			})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	// switch1Change: function (e) {
	// 	console.log('switch1 发生 change 事件，携带值为', e.detail.value)
	// },
	// switch2Change: function (e) {
	// 	console.log('switch2 发生 change 事件，携带值为', e.detail.value)
	// }
})